import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import PhoneInput from 'react-phone-number-input/input';
import { NavLink } from "react-router-dom";

const name_REGEX = /^[а-яёА-ЯЁ]{2,23}$/;
const PWD_REGEX = /^(?=.*[A-z])(?=.*[0-9]).{6,24}$/;

const AddStaff = () => {
    const phoneRef = useRef();
    const nameRef = useRef();
    const errRef = useRef();

    const [phone, setPhone] = useState('+7');
    const [lastname, setLastname] = useState('');
    const [itn, setItn] = useState('');
    const [salary, setSalary] = useState('');
    const [name, setname] = useState('');
    const [pwd, setPwd] = useState('');
    const [matchPwd, setMatchPwd] = useState('');
    
    const [validName, setValidName] = useState(false);
    const [nameFocus, setnameFocus] = useState(false);
    
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setValidName(name_REGEX.test(name));
    }, [name])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [name, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = name_REGEX.test(name);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post('http://localhost:8082/api/v1/client',
                JSON.stringify({ number: phone, name: name, secondName: lastname , itn: itn, salary: salary, password: pwd }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                    },
                    withCredentials: false
                }
            );
            console.log(JSON.stringify(response))
            setSuccess(true);
            localStorage.setItem('auth', 'true');
            setname('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <div className="wrapper">
            {success ? (
                <section className="btn-login-center">
                    <h1>Успешная регистрация!</h1>
                    <NavLink to={'/staff'}><p>к списку сотрудников</p></NavLink>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                    <h1 className={'btn-login-center'}>Регистрация нового сотрудника</h1>
                    <form onSubmit={handleSubmit}>


                        <label htmlFor="phone">Номер телефона:</label>
                        <PhoneInput
                            value={phone}
                            ref={phoneRef}
                            autoComplete="off"
                            name="phone"
                            onChange={setPhone}
                            required
                            maxLength="16" />


                        <label htmlFor="name">
                            Имя:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !name ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="name"
                            ref={nameRef}
                            autoComplete="off"
                            onChange={(e) => setname(e.target.value)}
                            value={name}
                            required
                            onFocus={() => setnameFocus(true)}
                            onBlur={() => setnameFocus(false)}
                        />

                        <label htmlFor="lastname">Фамилия:</label>
                        <input
                            type="text"
                            id="lastname"
                            onChange={(e) => setLastname(e.target.value)}
                            value={lastname}
                            required
                        />

                        <label htmlFor="itn">ИНН:</label>
                        <input
                            type="number"
                            id="itn"
                            onChange={(e) => setItn(e.target.value)}
                            value={itn}
                            required
                        />

                        <label htmlFor="salary">Зарплата:</label>
                        <input
                            type="number"
                            id="salary"
                            onChange={(e) => setSalary(e.target.value)}
                            value={salary}
                            required
                        />
                        <p id="uidnote" className={nameFocus && name && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            От 4 до 24 символов.<br />
                            В строке должен быть только текст.<br />
                        </p>

                        <label htmlFor="password">
                            Пароль:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            От 6 до 24 символов.<br />
                            Должен включать в себя цифры, буквы верхнего и нижнего регистра.<br />
                        </p>

                        <label htmlFor="confirm_pwd">
                            Подтвердите пароль:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Должен совпадать с полем "Пароль"
                        </p>
                        <button className={`nav-link active btn-login-center`} disabled={!validName || !validPwd || !validMatch ? true : false}>Зарегистрировать</button>
                    </form>
                </section>
            )}
        </div>
    )
}

export default AddStaff
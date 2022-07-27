
// make all words uppercase to the sentence.
const makeWordUppercase = (str) => {
    let words = str.toLowerCase().split(" ");
    const upperCaseWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return upperCaseWords.join(" ");
};

// Api call
const getPosts = async (url) => {
    const res = await fetch(url);
    const data = res.json();
    console.log(data);
};

// img components
const Avatar = ({ img }) => {
    return <>{img ? <img src={img} /> : "Image not found"}</>;
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form Submitted");
};


// Login Form 

const initialState = {
    email: '',
    password: ''
}

const Form = () => {
    const [formData, setFormData] = useState(initialState);
    const { email, password } = formData;
    const [error, setError] = useState(null);

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
        if (email && password) setError('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please give the right value')
            return;
        }
        setFormData(initialState);
        setError('');
        alert("form Submitted " + formData.email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label" htmlFor="email">
                    Email
                </label>
                <input
                    onChange={handleOnChange}
                    className="form-control"
                    type="email"
                    name="email"
                    value={email}
                    id="email"
                    placeholder="Email"
                />
                {error && <div className="form-text">{error}</div>}
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="password">
                    Password
                </label>
                <input
                    onChange={handleOnChange}
                    className="form-control"
                    type="password"
                    name="password"
                    value={password}
                    id="password"
                    placeholder="Password"
                />
                {error && <div className="form-text">{error}</div>}
            </div>
            <div className="text-end">
                <button type="submit" className="btn btn-info">
                    LogIn
                </button>
            </div>
        </form>
    );
};

// number to lack, million, billion, trillion converter
const numberAbbrevation = (value) => {
    let newValue = value;
    if (value >= 1000) {
        const suffixes = ["", 'K', 'M', 'B', 'T'];
        const suffixNum = Math.floor(('' + value).length / 3);
        let shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2));
        if (shortValue % 1 != 0) shortValue = shortValue.toFixed(2);
        newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
}

console.log(numberAbbrevation(1000));  // 1K

// Promise base function who catch error
const getData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}


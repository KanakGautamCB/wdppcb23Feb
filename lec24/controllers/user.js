const User = require( '../models/user.js');   

const bcrypt =  require('bcrypt');


module.exports.postRegister = async (req, res) => {
    
    const { name, email, password } = req.body;
    if(!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        let user = await User.findOne({ name, email });
        if (user) {
            return res.redirect('/login')
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({
            name,
            email,
            password:hashedPassword
        })

        await user.save(); 
        
        return res.redirect('/login');


    } catch (error) {
        return res.status(500).json({ message: error.message });  
    }
}

module.exports.getRegister = (req, res) => {
    return res.render('register');
}


module.exports.postLogin = async (req, res) => {
    console.log(req.user)
    res.redirect('/profile')
}

module.exports.getLogin = (req, res) => {
    return res.render('login');
}


module.exports.getProfile = (req, res) => {
    if (!req.user) {
        return res.redirect('/login');
    }

    return res.render('profile', { username: req.user.name, email:req.user.email });
}

module.exports.getLogout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed' });
        }
        return res.redirect('/login');
    });
}




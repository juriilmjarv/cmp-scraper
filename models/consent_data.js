import mongoose from 'mongoose';

let consentSchema = new mongoose.Schema({
    url: String,
    html: String,
    darkPattern: Boolean,
    acceptBtn: String,
    rejectBtn: String,
    cookieBtn: String,
    preChecked: Boolean,
});

let CookieDB = mongoose.model('onetrust', consentSchema);

export default CookieDB;
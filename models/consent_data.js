import mongoose from 'mongoose';

let consentSchema = new mongoose.Schema({
    url: String,
    html: String,
    acceptBtn: String,
    rejectBtn: String,
    cookieBtn: String,
    preChecked: Boolean,
});

let CookieDB = mongoose.model('onetrust', consentSchema);

export default CookieDB;
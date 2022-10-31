
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../../frontend/public/Media/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

app.use(bodyParser.json());

const { initializeApp } = require("firebase/app");
const { doc, collection, getFirestore, setDoc,getDocs, addDoc } = require('firebase/firestore')


const firebaseConfig = {
    apiKey: "AIzaSyCi5Lke3BhtSpda2Ao1Uc44dx8F8pH2FdM",
    authDomain: "bajaj-science-center.firebaseapp.com",
    projectId: "bajaj-science-center",
    storageBucket: "bajaj-science-center.appspot.com",
    messagingSenderId: "792104130730",
    appId: "1:792104130730:web:089fea02e7135fb36018d3",
    measurementId: "G-T6NTV8H87G"
};


const server = initializeApp(firebaseConfig);
const db = getFirestore(server);

const PORT = 5050


// GET and POST Methods for Teams

app.post('/teams', upload.single('image'), async (req, res) => {

    let data = req.body.data
    const ImageInformatiom = req.file

    data = JSON.parse(data)
    // Data -> "Name"   : "{ Name , Designation , Team , ImagePath }"

    try {

        for (let key in data) {
            if (key === "imagePath") {
                data.imagePath = ImageInformatiom.path
            }
        }

        const docRef = addDoc(collection(db, `teams/`), { data });
        // data.forEach(member => {
        // });

        res.status(200).json("Data Added")

    } catch (e) {

        res.status(404).json("Error Occured" + e)

    }

})

app.get('/teams', async (req, res) => {

    let coreTeam = []
    let teachingStaff = []
    let administrativeStaff = []
    let mentors = []


    try {

        const querySnapshot = await getDocs(collection(db, "teams/"));
        querySnapshot.forEach((doc) => {

            if (doc.data()['data'].team === "core") {
                coreTeam.push(doc.data())
            }
            if (doc.data()['data'].team === "administrativeStaff") {
                administrativeStaff.push(doc.data())
            }
            if (doc.data()['data'].team === "teachingStaff") {
                teachingStaff.push(doc.data())
            }
            if (doc.data()['data'].team === "mentors") {
                mentors.push(doc.data())
            }
        }
        );
        res.status(200).json({ coreTeam, teachingStaff, administrativeStaff, mentors })


    } catch (e) {
        res.status(404).json(e)
    }

})

// GET and POST Methods for Class Content

app.post('/content', upload.array('content', 10), async (req, res) => {

    var data = req.body.data
    data = JSON.parse(data)
    const files = req.files
    var paths = []


    files.forEach((ele) => {
        paths.push(ele.path)
    })

    // { data : { class  , contentPath : { name , type ,  path } }

    try {

        data['contentPath'] = paths
        const docRef = addDoc(collection(db, `contents/`), data);
        res.status(200).json("Content Added")

    } catch (e) {

        console.log("Error Occured: ", e);

    }

})

app.get('/content', async (req, res) => {

    let Content = []

    try {
        const querySnapshot = await getDocs(collection(db, "contents/"));
        querySnapshot.forEach((doc) => {

            Content.push(doc.data())
        }
        );

        res.status(200).json(Content)


    } catch (e) {

        res.json(e)

    }

})


// GET and POST Methods for Testimonials

app.post('/testimonials', upload.single('image'), async (req, res) => {

    const data = req.body.data
    // data : [{ name , imagePath , Testimonial }]

    try {

        data.forEach(testimonial => {
            const docRef = addDoc(collection(db, `testimonials/`), testimonial);
        });

        res.status(200).json("Testimonial Added")

    } catch (e) {

        console.error("Error Occured: ", e);

    }


})

app.get('/testimonials', async (req, res) => {

    let Testimonials = []

    try {
        const querySnapshot = await getDocs(collection(db, "testimonials/"));
        querySnapshot.forEach((doc) => {
            Testimonials.push(doc.data())
        }
        );

        res.status(200).json(Testimonials)


    } catch (e) {

        res.json(e)

    }
})


// GET and POST Methods for Infrastructure

app.post('/infrastructure', upload.array('images', 10), async (req, res) => {

    const data = req.body.data
    // data : [{ name , [path] }]

    try {

        data.forEach(infrastructure => {
            const docRef = addDoc(collection(db, `infrastructures/`), infrastructure);
        });

        res.status(200).json("Infrastructure Added")

    } catch (e) {

        console.error("Error Occured: ", e);

    }


})

app.get('/infrastructure', async (req, res) => {

    let Infrastructure = []

    try {
        const querySnapshot = await getDocs(collection(db, "infrastructures/"));
        querySnapshot.forEach((doc) => {
            Infrastructure.push(doc.data())
        }
        );

        res.status(200).json(infrastructure)


    } catch (e) {

        res.json(e)

    }
})





app.listen(PORT, function () {
    console.log(`Demo project at: ${PORT}!`);
});
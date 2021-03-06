var express = require('express');
var router = express.Router();
var Country = require('../models/country');
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
/* GET countries page. */
router.get('/countries', function(req, res, next) {
    res.render('countries', { title: 'Ajax Demo', layout: 'layout1' });
});
/* GET contacts page. */
router.get('/contacts', function(req, res, next) {
    res.render('contacts', { title: 'Contacts' });
});


router.post('/contacts', function(req, res, next) {
    //відправити листа
    /*let ArrayTo = [
        "dimaspas62@gmail.com",
        "dimalesa62@gmail.com"
    ];*/
    var message = {
        from: req.body.email,
        to: "dimaspas62@gmail.com, dimalesa62@gmail.com",
        subject: 'Message from Ecotour [' + req.body.name + ']',
        text: req.body.message,
        html: '<p>' + req.body.message + '</p>'
    };
    if (req.body.human === "5") {
        let transporter = nodemailer.createTransport({
            tls: {
                rejectUnauthorized: false
            },
            service: 'gmail',
            auth: {
                user: "dimaZora62@gmail.com",
                pass: "Password!"
            }
        });

        // send mail with defined transport object
        transporter.sendMail(message, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log(info);
            res.render('contacts-res', { title: 'Contacts:', message: "Лист віправлено!" })
        });

    } else {
        res.render('contacts-res', { title: 'Contacts:', message: "Ви робот?!" });
    }

});


router.get("/setup-db", function(req, res) {

    var countries = [{
            Name: "Італія",
            Desc: "держава на півдні Європи, в Середземномор'ї. Займає Апеннінський півострів, Паданську рівнину, південні схили Альп, острови Сицилія, Сардинія тощо. На суходолі Італія межує з Францією на північному заході, зі Швейцарією й Австрією на півночі та Словенією на північному сході.",
            Image: "images/italy.png"
        },
        {
            Name: "Сполучені Штати Америки",
            Desc: "конституційна федеративна республіка в Північній Америці, що складається з 50 штатів: Аляски, Гаваїв, 48 штатів на території між Атлантичним і Тихим океанами і між Канадою і Мексикою та федерального (столичного) округу Колумбія. Окрім того, США належать частина Віргінських островів (Американські Віргінські Острови) та Пуерто-Рико у Вест-Індії, Східне Самоа, Гуам, Північні Маріанські Острови та інші острови в Океанії. Столиця — місто Вашингтон.",
            Image: "images/USA.png"
        },
        {
            Name: "Туреччина",
            Desc: "раїна, що лежить в Азії між Чорним і Середземним морями, межує на сході з Вірменією, Грузією й Іраном, на південному сході з Іраком і Сирією, на заході з Грецією й Егейським морем, на північному заході з Болгарією. На території країни, крім турків, проживають значною мірою курди (близько 12 млн осіб), вірмени, греки, араби, лази, аджарці, євреї, ассирійці, болгари, албанці, боснійці, хорвати. Член Міжнародного банку реконструкції й розвитку і Міжнародного валютного фонду (з 1947). Член Організації Чорноморського Економічного Співробітництва, НАТО, ООН, кандидат до Європейського Союзу. Сучасна Туреччина, чиїм попередником була 600-річня Османська імперія, виникла на політичній карті світу після Першої світової війни.",
            Image: "images/tyrk.png"
        },
        {
            Name: "Тайланд",
            Desc: "країна в Південно-Східній Азії, розташована на півостровах Індокитай і Малакка, межує на сході з Лаосом і Камбоджею, півдні з Малайзією, на заході з М'янмою (раніше Бірма). Загальна протяжність берегової лінії близько 2400 км. Південне узбережжя країни омивається Сіамською затокою, південно-західне — Андаманським морем.",
            Image: "images/tailand.png"
        },
        {
            Name: "Франція",
            Desc: "держава на заході Європи, республіка, що межує на північному сході з Бельгією, Люксембургом і Німеччиною, на сході з Німеччиною, Швейцарією, південному-заході з Іспанією й Андоррою, на південному-сході з Італією та Монако на півдні омивається Середземним морем, на заході — Атлантичним океаном.",
            Image: "images/franc.png"
        },
        {
            Name: "Індія",
            Desc: "країна в Південній Азії. На північному заході межує з Пакистаном; на півночі — з КНР, Непалом і Бутаном; на сході — з М'янмою і Бангладеш. На півдні вузька Полкська протока і Манарська затока відділяють її від Шрі-Ланки. Протокою між островами Великий Нікобар і Суматра проходить морський кордон між Індією та Індонезією.",
            Image: "images/india.png"
        }
    ];

    Country.remove({}, function(err) {
        if (err) {
            console.error(err);
        } else {

            for (let i = 0; i < countries.length; i++) {
                Country.create(countries[i], function(err, country) {
                    if (err) console.error('Error: ' + err);
                    else console.log();
                });
            }
        }
    });
    res.status(200).json({
        message: "Okey",
    });

});
/* GET prices page. */
router.get('/prices', function(req, res, next) {
    res.render('prices', { title: 'Prices' });
});


module.exports = router;
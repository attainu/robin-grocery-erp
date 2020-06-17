let Prdt = require('../model/prdtmodel');

let prdtcontroller ={}

prdtcontroller.productlist = async(req,res,next)=>{
    res.render('seller')
}

prdtcontroller.create = async(req,res,next)=>{
    res.render('product')
}
prdtcontroller.createProduct = async(req,res,next)=>{

    const prdts = await Prdt.find().sort({prdtid:-1})
    let strid
    if(prdts.length == 0){
         strid = "PRDT001"        
    }else{
        let id = (Number(prdts[0].prdtid.slice(3,7))+1).toString()
        let trg_len = 4-id.length
        let uid = id.padStart(trg_len, 0)
        strid = "PRDT"+uid
    }

    const data = new Prdt({ 
        prdtid: strid,
        prdtname: req.body.prdtname,
        descn: req.body.des,
        price : req.body.price,
        offer: req.body.offer,
        catgy: req.body.cat,
        qty : req.body.qty,
        expdate: req.body.expdate,
        imgpath: req.body.image
    })
    try {
        await data.save()
    } catch (error) {
        console.log("Error")
        res.send(error)
    }
};
module.exports = prdtcontroller;
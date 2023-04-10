const conn=require('../dbconnection');

const getAllMeansByTrait=(req, res)=>{
    conn.query('SELECT rowid as id, source, site, species, vernacular, nutrition, traitname, sexorpari, survivaloption, landmark, measurement from allmeansmeasurementsbytraitview', (err, rows)=>{
        if(err){
            console.log(err)
            return res.status(404).json({message:'err'})
        }
        return res.status(200).json({message:'ok', rows:rows})
    })
}

module.exports={
    getAllMeansByTrait
}
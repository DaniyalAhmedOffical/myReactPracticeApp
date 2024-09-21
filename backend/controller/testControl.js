import exprss from 'express'

export const testFunction= (req,res)=>{
    console.log('First Function in Controller')
    res.json({id:1,messeage:"This is Response"})
}

export const t2 = (req, res)=>{
    console.log(req)
    res.json('This is String or Text Response')
}
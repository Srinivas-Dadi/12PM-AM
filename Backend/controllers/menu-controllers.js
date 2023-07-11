import Menu from "../model/menu.js";

export const menulist = async (req,res,next) => {
    try{
        let list = await Menu.find({});
        if(!list) return res.status(400).json({message:"NO Data"})
        return res.json(list)
    }catch(e){
        return console.error(e);
    }
}

export const addItem = async (req,res,next) => {
    const {name,serves,price,category}= req.body;
    try{
        let checkItem = await Menu.findOne({name:name});
        if(checkItem){
            return res.status(400).json({message:"Item Allready Exists"});
        }
        let cat = category.toUpperCase();
        let upname = name.toUpperCase();
        const item = new Menu({
            name:upname,
            serves,
            price,
            category: cat
        });
        await item.save();
        return res.status(200).json({message:"Item aded"})
    }catch(e){
        return console.error(e);
    } 
}

export const updateItem = async(req,res,next) =>{
    const {name,serves,price,category} = req.body;
    try{
        let checkItem = await Menu.findOne({name:name});
        if(!checkItem){
            return res.status(404).json({message:"Item not found"});
        }
        Menu.findByIdAndUpdate(checkItem.id, {
            name:name.toUpperCase(),
            serves:serves,
            price:price,
            category:category.toUpperCase(),
        })
        return res.status(200).json(checkItem.id);
    }catch(e){
        return console.error(e);
    }
}
import express from 'express';
const router = express.Router();
import User from "../model/userModel.js";


//request
router.get('/', async (req, res) => {
 const users = await User.find();
 res.json(users);
});

router.get('/:id', async(req,res) => {
     try{
  const users = await User.findById(req.params.id);
 res.json(users);
     }catch(e){
      console.log(e.message);
     }

});

//create
router.post('/', async(req, res) => {
  const data = {
    name: req.body.name,
    age: req.body.age,
  }

try{
  const user = new User(data);
   await user.save();
}catch(e){
  console.log(e);
  
}
  res.json(user);
});


//update
router.patch('/:id', async(req, res) => {
  const data = {
    name:req.body.name,
    age: req.body.age,

  }
  await User.findByIdAndUpdate({_id:req.params.id},data);
  const userUpdated = await User.findById(req.params.id);

  res.json(userUpdated);

});


//delete
router.delete('/:id', async(req,res) =>{
    await User.findByIdAndDelete(req.params.id);
    res.json({
      message:'deleted'
    });
});


export default router;

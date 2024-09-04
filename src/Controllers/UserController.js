import UserModel from "../Models/UserModel.js";
//import RefreshTokenModel from "../Models/RefreshTokenModel.js";
//import { signSessionJwts, decodeRefreshToken } from "../Utils/general/jwt.js";

class UserController {
    async create (req, res) {
        try{  
            const user = await UserModel.create(req.body);

            return res.status(200).json(user);

        } catch (error) {
            res.status(500).json({message: "/UserController: Deu ruim aqui no create!!", error: error.message});

        }
    }

    async readAll(req, res) {
        try {
          const user = await UserModel.find().select("-favoritesTrees");
          res.status(200).json(user);
        } catch (error) {
          res.status(500).json({ message: "Error while fetching Users", error: error.message });
        }
      }
    


  async read (req, res) {
    try {
        const{ id } = req.params;
          const user = await UserModel.find();

          return res.status(200).json(user); 


    } catch (error) {
        res.status(500).json({message: "/UserController: Deu ruim aqui no read!!", error: error.message});
  

    }
       
    }

   async update (req, res) {
    try {
        const{ id } = req.params;
        const user = await UserModel.findById(id);

        if(!user){
            return res.status(404).json({message: "Usuário não encontrado"})
        }
        
        const userUpdated = await user.set(req.body).save();
        
        //const usuario = await UsuarioModel.findByIdAndUpdate(id, req.body, {new: true})
        return res.status(200).json(userUpdated);

    } catch (error) {
        res.status(500).json({message: "/UserController: Deu ruim aqui no update!!", error: error.message});

    }
       
        
    }
    async destroy (req, res) {
        try {
             const { id } = req.params;
             const user = await UserModel.findById(id);

        if(!user){
            return res.status(404).json({message: "Usuário não encontrado"});
        }

        await user.deleteOne();

        return res.status(200).json({message:"usuario deletado com sucesso!"});

        } catch (error) {
            res.status(500).json({message: "/UsuarioController: Deu ruim aqui no delete!!", error: error.message});
    
        }
           
    }
}

export default new UserController();

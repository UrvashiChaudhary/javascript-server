// create a class according to instructions that mention in #39523
import { NextFunction, Response } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
class TraineeController {
    static instance: TraineeController;
    static getInstance() {
        if ( TraineeController.instance ) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;;
    }
       constructor(){
           this.get= this.get.bind(this);
           this.create= this.create.bind(this);
       }
        userRepository: UserRepository=new UserRepository();
    get=( req, res, next ) =>{
        try {
            console.log( 'Inside GET method of Trianee controller ' );
              this.userRepository.find({role: "trainee"}, {}, {})
             .then((res)=>{
console.log('Response is: ',res);
             })
          
            const  data= [
                    {
                        name: 'trainee'
                       
                    }
                ]
             res.status(200).send({message:'successfully fetched Trainee', data:data})

        } catch (err) {
            console.log( 'Inside Error', err );
        }
    }
    create=( req, res, next )=>{
        try {
            console.log( 'Inside POST method of Trianee controller ' );
              this.userRepository.create({role: req.body.role, name: req.body.name})
              .then((res)=>{
                  console.log('Response is: ',res);
              })
            res.send({
                message: 'Trainee created successfully',
                data: {
                    name: 'Trainee1',
                    address: 'noida'
                }
            })
        } catch (err) {
            console.log( 'Inside Error', err );
        }
    }
    update( req, res, next ) {
        try {
            console.log( 'Inside Update method of Trianee controller ' );

            res.send({
                message: 'Trainee updated successfully',
                data: {
                    name: 'Trainee1',
                    address: 'noida'
                }
            })
        } catch (err) {
            console.log( 'Inside Error', err );
        }
    }
    delete( req, res, next ) {
        try {
            console.log( 'Inside delete method of Trianee controller ' );

            res.send({
                message: 'Trainee deleted successfully',
                data: {
                    name: 'Trainee1',
                    address: 'noida'
                }
            })
        } catch (err) {
            console.log( 'Inside Error', err );
        }
    }
}
export default TraineeController.getInstance();

//export default new TraineeController();
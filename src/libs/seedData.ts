import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import config from '../config/configuration';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
        .then(res => {
            if (res === 0) {
                console.log('data seeding in progress');
                userRepository.create({
                    name: 'Head Trainer',
                    role: 'head-trainer',
                    email: 'headtrainer@successive.tech',
                    password: bcrypt.hashSync(config.password, 10)
                });
                userRepository.create({
                    name: 'Trainee',
                    role: 'trainee',
                    email: 'trainee@successive.tech',
                    password: bcrypt.hashSync(config.password, 10)
                });
            }
             else {
            console.log('data is already seeded');
                }
        })
        .catch(err => console.log(err));
};

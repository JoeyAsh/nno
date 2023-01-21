import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('User')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false, unique: true, name: 'user_id'})
    userID: string;

    @Column({nullable: false, unique: true})
    email: string;

    @Column({nullable: true, name: 'first_name'})
    firstName?: string;

    @Column({nullable: true, name: 'last_name'})
    lastName?: string;

    @Column({nullable: true, name: 'birth_date'})
    birthDate?: Date;
}

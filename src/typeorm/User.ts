import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export  class User{
    @PrimaryGeneratedColumn({
        type:'bigint',
        name:'user_id',
    })
    id: number;

    @Column({
        name: 'username ',
        nullable:false,
        default:'',
    })
    username: string;
    
    @Column({
        name: 'email_address',
        nullable:false,
        default:'',
    })
    email: string;

    @Column({
        name: 'password',
        nullable:false,
        default:'',
    })
    password: string;

    @CreateDateColumn({
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP(6)"
    })
    Created_at: number;

    @CreateDateColumn({
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP(6)"
    })
    update_at: number;
}

@Entity()
export  class Register{
    @PrimaryGeneratedColumn({
        type:'bigint',
        name:'user_id',
    })
    id: number;

    @Column({
        name: 'username ',
        nullable:false,
        default:'',
    })
    username: string;
    
    @Column({
        name: 'email_address',
        nullable:false,
        default:'',
    })
    email: string;

    @Column({
        name: 'password',
        nullable:false,
        default:'',
    })
    password: string;

    @Column({
        name: 'confirm password',
        nullable:false,
        default:'',
    })
    confirm_password: string;

    @CreateDateColumn({
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP(6)"
    })
    Created_at: number;

    @CreateDateColumn({
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP(6)"
    })
    update_at: number;
}
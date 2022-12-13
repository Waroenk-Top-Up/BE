import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Produk{
@PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'produk_id',
})
id: number;

@Column({
    name: 'produk',
    nullable:false,
    default:'',
})
produk: string

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

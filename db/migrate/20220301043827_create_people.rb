class CreatePeople < ActiveRecord::Migration[7.0]
  def change
    create_table :people do |t|
      t.string :first_name
      t.text :bio
      t.integer :savings
      t.text :img

      t.timestamps
    end
  end
end

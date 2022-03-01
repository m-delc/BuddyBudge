require "faker"

User.create!(username: "Chuckles", first_name: "Chuckles the Clown", password: "hahaha" )

# 10.times do
#     Person.create!(
#         first_name: Faker::Name.first_name,
#         bio: Faker::Lorem.sentence(word_count: 10),
#         savings: Faker::Number.within(range: 101..2499),
#         img: Faker::LoremFlickr.image(size: "50x60", search_terms: ['headshot'])
#     )
# end

Person.create!(first_name: Faker::Name.first_name, bio: Faker::Lorem.sentence(word_count: 10), savings: Faker::Number.within(range: 101..2499), img: "https://denverbusinessheadshots.com/wp-content/uploads/2020/02/Denver-Business-Headshots-Denver-Headshots-Denver-Portrait-Photography-Denver-Portraits-Denver-Headshot-Colorado-Business-Headshots-148-256x256.jpg")
Person.create!(first_name: Faker::Name.first_name, bio: Faker::Lorem.sentence(word_count: 10), savings: Faker::Number.within(range: 101..2499), img: "https://aacu.imgix.net/content/person/Headshot_Nicole-Fry.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=256&q=80&w=256")
Person.create!(first_name: Faker::Name.first_name, bio: Faker::Lorem.sentence(word_count: 10), savings: Faker::Number.within(range: 101..2499), img: "https://denverbusinessheadshots.com/wp-content/uploads/2020/02/Denver-Business-Headshots-Denver-Headshots-Denver-Portrait-Photography-Denver-Portraits-Denver-Headshot-Colorado-Business-Headshots-102-256x256.jpg")
Person.create!(first_name: Faker::Name.first_name, bio: Faker::Lorem.sentence(word_count: 10), savings: Faker::Number.within(range: 101..2499), img: "https://yourheadshot.rocks/wp-content/uploads/2021/06/Christina-Gressianu-Colorado-Headshot-Company.png")
Person.create!(first_name: Faker::Name.first_name, bio: Faker::Lorem.sentence(word_count: 10), savings: Faker::Number.within(range: 101..2499), img: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/60/square_thumb%402x.jpg")
Person.create!(first_name: Faker::Name.first_name, bio: Faker::Lorem.sentence(word_count: 10), savings: Faker::Number.within(range: 101..2499), img: "https://theoncologyinstitute.com/wp-content/uploads/2021/08/Chrystina-Castellon-MD.png")
Person.create!(first_name: Faker::Name.first_name, bio: Faker::Lorem.sentence(word_count: 10), savings: Faker::Number.within(range: 101..2499), img: "https://ascendindiana.com/uploads/Quote-Photos/_256x256_crop_center-center_none/Alexis-B_MIdwest-Associates.png")
Person.create!(first_name: Faker::Name.first_name, bio: Faker::Lorem.sentence(word_count: 10), savings: Faker::Number.within(range: 101..2499), img: "https://theoncologyinstitute.com/wp-content/uploads/2021/03/Gol-Golshani-MD.png")
Person.create!(first_name: Faker::Name.first_name, bio: Faker::Lorem.sentence(word_count: 10), savings: Faker::Number.within(range: 101..2499), img: "https://mdimentors.org/wp-content/uploads/2019/11/Dana-Williams-Headshot.png")
Person.create!(first_name: Faker::Name.first_name, bio: Faker::Lorem.sentence(word_count: 10), savings: Faker::Number.within(range: 101..2499), img: "https://iapp.org/media/headshots/0011P000014rBIyQAM.png")
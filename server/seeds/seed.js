const db = require('../config/connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Shirts' },
    { name: 'Pants' },
    { name: 'Onesies' },
    
  
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "2-Piece Striped Top & Jogger Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700603231/2-Piece_Striped_Top_Jogger_Set_y4i8gf.jpg",
      gender: "boys",
      category: "onesies",
      price: 24.95,
      description: "Made to match, this set is complete with a striped top and a pair of coordinating easy-on joggers.",
      payBtn: "https://buy.stripe.com/7sI17z72FdVP5Gw7sz"
    },
    {
      name: "2-Piece Navy Construction Truck Hoodie and Pants Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700603344/2Q074310_mdjxvo.jpg",
      gender: "boys",
      category: "onesies",
      price: 19.95, 
      description: "Made for the changing season, this relaxed fit set is a cozy new addition to a fall wardrobe.",
      payBtn: "https://buy.stripe.com/aEU8A15YB3hbglaaEJ"
    },
    {
      name: "2-Piece Floral Top & Legging Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700603605/2O621810_gadvt8.webp",
      gender: "girls",
      category: "onesies",
      price: 15.95,
      description: "2-Piece Navy Construction Truck Hoodie and Pants Set",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "2-Piece French Terry Outfit Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700603605/2O032110_vsu9ij.jpg", 
      gender: "girls",
      category: "onesies",
      price: 15.95,
      description: "Made to match, this set is complete with a long-sleeve tee and coordinating pair of knit denim pants.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "Pocket Henley Long Sleeve Shirt",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168506/Pocket-Henley_owrbel.png",
      gender: "boys",
      category: "shirts",
      price: 15.95,
      description: "Crafted in super soft slub jersey, this striped henley makes the perfect layer.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "Striped Heather T-Shirt",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168509/Striped-Heather-T-Shirt_zi48g3.png",
      gender: "boys",
      category: "shirts",
      price: 24.95,
      description: "This tee is so easy to throw on and go. It pairs well with jeans, cargos and joggers too! Plus the long sleeves will keep him cozy all season long.",
      payBtn: "https://buy.stripe.com/7sI17z72FdVP5Gw7sz"
    },
    {
      name: "Cotton T-Shirt",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168630/Cotton-Tee_neb0pf.jpg",
      gender: "girls",
      category: "shirts",
      price: 19.95,
      description: "Lightweight with short sleeves, this basic tee is perfect for layered looks or starting play outfits!",
      payBtn: "https://buy.stripe.com/aEU8A15YB3hbglaaEJ"
    },
    {
      name: "Love Bug Graphic Tee",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168631/Love-Bug-Graphic-Tee_psibyz.png",
      gender: "girls",
      category: "shirts",
      price: 34.95,
      description: "Crafted in soft cotton, this tee is perfect for your little love bug.",
      payBtn: "https://buy.stripe.com/8wM9E5aeR7xr8SIdQU"
    },
    {
      name: "Everyday Pull-On Pants",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168559/Everyday-Pull-On-Pants_wrohs2.jpg",
      gender: "boys",
      category: "pants",
      price: 24.95,
      description: "Perfect for today, tomorrow and yesterday, these easy on pants are perfect for your active one.",
      payBtn: "https://buy.stripe.com/dR68A1aeR6tngla146"
    },
    {
      name: "Relaxed Fit Pull-On Joggers",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168560/Relaxed-Fit-Pull-On-Joggers_u2r1b8.jpg",
      gender: "boys",
      category: "pants",
      price: 19.95, 
      description: "Made for the changing season, these relaxed fit joggers are a cozy new addition to their fall wardrobe. Plus, a functional drawstring makes them the perfect fit every time.",
      payBtn: "https://buy.stripe.com/cN27vX86J4lf9WMcMP"
    },
    {
      name: "Heart Leggings",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168612/Heart-Leggings_k4ydtz.jpg",
      gender: "girls",
      category: "pants",
      price: 15.95,
      description: "Designed with an easy on waistband and lots of stretch, these cute leggings are perfect for your active girl.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "Pull-On Flare Pants",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168614/Pull-On-Flare-Pants_pkxikl.png",
      gender: "girls",
      category: "pants",
      price: 15.95,
      description: "Super trendy and super comfy, these pull-on flare pants are perfect for your little cutie.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "Pocket Jersey Tee",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700592511/29125711_phom1j.webp",
      gender: "boys",
      category: "shirts",
      price: 15.95,
      description: "Crafted in lightweight jersey with a front pocket, this tee is a closet essential.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "Pocket Henley",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700592511/Toddler_Pocket_Henley_utuut9.webp",
      gender: "boys",
      category: "shirts",
      price: 15.95,
      description: "This henley is perfect for the changing season. Easy to pair and perfect for him!",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "Pullover Cotton Sweater",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700592511/Pullover_Cotton_Sweater_fcfd7h.webp",
      gender: "boys",
      category: "shirts",
      price: 34.95,
      description: "He'll look extra handsome in this pullover sweater, complete with a front button placket and cozy ribbed trim.",
      payBtn: "https://buy.stripe.com/8wM9E5aeR7xr8SIdQU"
    },
    {
      name: "Cotton Turtleneck",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700592510/Cotton_Turtleneck_phfimv.webp",
      gender: "boys",
      category: "shirts",
      price: 19.95,
      description: "Designed with long cozy sleeves, this turtleneck is a cold-weather favorite.",
      payBtn: "https://buy.stripe.com/cN27vX86J4lf9WMcMP"
    },
    {
      name: "Striped Pocket Jersey Tee",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700592511/Toddler_Striped_Pocket_Jersey_Tee_vfiyxa.webp",
      gender: "boys",
      category: "shirts",
      price: 15.95,
      description: "This striped pocket tee is a closet essential. Perfect for mixing and matching, this long-sleeve tee is a year round favorite.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "Pull-On French Terry Joggers",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700593009/Toddler_Pull-On_French_Terry_Joggers_ht62di.webp",
      gender: "boys",
      category: "pants",
      price: 15.95,
      description: "Crafted in a soft cotton blend, these easy on joggers are perfect for everyday.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "Straight Leg Indigo Wash Jeans",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700593009/Toddler_Straight_Leg_Indigo_Wash_Jeans_zy4cud.webp",
      gender: "boys",
      category: "pants",
      price: 15.95,
      description: "Signature wash jeans featuring a relaxed, straight leg that pairs with everything! Crafted of soft, stretch denim with an adjustable waistband for comfortable style.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "Camo Pull-On French Terry Joggers",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700593013/Camo_Pull-On_French_Terry_Joggers_xynf8j.webp",
      gender: "boys",
      category: "pants",
      price: 19.95,
      description: "Camo Pull-On French Terry Joggers.",
      payBtn: "https://buy.stripe.com/cN27vX86J4lf9WMcMP"
    },
    {
      name: "Everyday Pull-On Pants",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700593025/Everyday_Pull-On_Pants_qa7avj.webp",
      gender: "boys",
      category: "pants",
      price: 15.95,
      description: "Perfect for today, tomorrow and yesterday, these easy on pants are perfect for your active one.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "Pull-On Corduroy Pants",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700593025/Pull-On_Corduroy_Pants_giwl3m.jpg",
      gender: "boys",
      category: "pants",
      price: 19.95,
      description: "Designed with an easy on waistband and functional drawstring, these corduroy pants are perfect for your active boy.",
      payBtn: "https://buy.stripe.com/cN27vX86J4lf9WMcMP"
    },
    {
      name: "2-Piece Tiger Pullover & Jogger Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700593025/Pull-On_Corduroy_Pants_giwl3m.jpg",
      gender: "boys",
      category: "onesies",
      price: 15.95,
      description: "Crafted in a soft cotton blend with long, cozy sleeves this pullover pairs with easy-on joggers.",
      payBtn: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700593493/2-Piece_Tiger_Pullover_Jogger_Set_dfy3wf.webp"
    },
    {
      name: "2-Piece Lion Tee & Jogger Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700593824/2-Piece_Lion_Tee_Jogger_Set_tbtsfa.webp",
      gender: "boys",
      category: "onesies",
      price: 15.95,
      description: "Complete with a fun lion design and interactive front paws, this super cool tee pairs with pull-on joggers for an everyday look.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "2-Piece Pullover & Jogger Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700593824/2-Piece_Pullover_Jogger_Set_eucybw.jpg",
      gender: "boys",
      category: "onesies",
      price: 15.95,
      description: "Made to match, this set is complete with a cute pullover to pair with easy-on joggers.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "2-Piece Baseball Henley Tee & Jogger Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700593823/2-Piece_Baseball_Henley_Tee_Jogger_Set_nntfwm.webp",
      gender: "boys",
      category: "onesies",
      price: 19.95,
      description: "Perfect for your little slugger, this baseball henley pairs with easy on joggers for a ready-to-go outfit.",
      payBtn: "https://buy.stripe.com/cN27vX86J4lf9WMcMP"
    },
    {
      name: "2-Piece Striped Pullover & Pant Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700593824/2-Piece_Striped_Pullover_Pant_Set_rw3dlm.webp",
      gender: "boys",
      category: "onesies",
      price: 19.95,
      description: "Crafted in cozy fleece and made to match, this set is complete with a striped pullover and a pair of easy on pants.",
      payBtn: "https://buy.stripe.com/cN27vX86J4lf9WMcMP"
    },
    {
      name: "2-Piece Hooded Jersey Tee & Legging Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700594134/2-Piece_Hooded_Jersey_Tee_Legging_Set_p4ttnt.webp",
      gender: "girls",
      category: "onesies",
      price: 15.95,
      description: "Made to match, this set is complete with a hooded jersey tee and a pair of coordinating easy-on leggings.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "2-Piece Fuzzy Pullover & Legging Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700594140/2-Piece_Fuzzy_Pullover_Legging_Set_lxnp6s.webp",
      gender: "girls",
      category: "onesies",
      price: 15.95,
      description: "Crafted in fuzzy velboa, this hooded pullover pairs with stretchy leggings for a comfy outfit.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "2-Piece Floral Top & Legging Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700594139/2-Piece_Floral_Top_Legging_Set_rtw95x.jpg",
      gender: "girls",
      category: "onesies",
      price: 15.95,
      description: "Crafted in a soft cotton blend, this long-sleeve top sits pretty over a pair of coordinating stretch leggings.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "2-Piece Apple Outfit Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700594134/2-Piece_Apple_Outfit_Set_ccx2au.jpg",
      gender: "girls",
      category: "onesies",
      price: 34.95,
      description: "Crafted in soft cotton, this matching set is complete with a long-sleeve apple top and a cozy pair of pants.",
      payBtn: "https://buy.stripe.com/8wM9E5aeR7xr8SIdQU"
    },
    {
      name: "2-Piece Fuzzy Pullover & Floral Legging Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700594139/2-Piece_Fuzzy_Pullover_Floral_Legging_Set_gyg1jk.jpg",
      gender: "girls",
      category: "onesies",
      price: 19.95,
      description: "Crafted in fuzzy velboa, this hooded pullover pairs with stretchy leggings for a comfy outfit.",
      payBtn: "https://buy.stripe.com/cN27vX86J4lf9WMcMP"
    },
    {
      name: "Waffle Knit Drawstring Joggers",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700595431/Waffle_Knit_Drawstring_Joggers_gwc0bu.webp",
      gender: "girls",
      category: "pants",
      price: 34.95,
      description: "These cozy joggers are perfect for the winter season. Complete with super soft waffle knit and a drawstring waist for the perfect fit.",
      payBtn: "https://buy.stripe.com/8wM9E5aeR7xr8SIdQU"
    },
    {
      name: "Floral Print Stretch Jersey Leggings",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700595424/Toddler_Floral_Print_Stretch_Jersey_Leggings_iwkjqo.jpg",
      gender: "girls",
      category: "pants",
      price: 15.95,
      description: "Mix and match these printed leggings with all of her favorite fall tops and sweaters. Plus, in stretch jersey she'll stay comfy all day long.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "Waffle Knit Drawstring Joggers",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700595431/Toddler_Waffle_Knit_Drawstring_Joggers_b1phjp.webp",
      gender: "girls",
      category: "pants",
      price: 15.95,
      description: "These cozy joggers are perfect for the winter season. Complete with super soft waffle knit and a drawstring waist for the perfect fit.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "Elastic Waist Oceana Blue Wash Jeggings",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700595436/Toddler_Straight_Leg_Indigo_Wash_Jeans_jxh3dx.webp",
      gender: "girls",
      category: "pants",
      price: 15.95,
      description: "With a slimmer fit and added stretch for extra comfort, these durable jeggings feature an elastic waist so your little one is kept comfortable.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "Lettuce Hem Rib Leggings",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700595425/Toddler_Lettuce_Hem_Rib_Leggings_csmpyi.webp",
      gender: "girls",
      category: "pants",
      price: 19.95,
      description: "So cozy and super stylish, these lettuce hem leggings are the go-to piece for winter. Pair with the matching hoodie for extra flair.",
      payBtn: "https://buy.stripe.com/cN27vX86J4lf9WMcMP"
    },
    {
      name: "Striped Pullover Sweater",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700595100/Striped_Pullover_Sweater_lbdei4.jpg",
      gender: "girls",
      category: "shirts",
      price: 15.95,
      description: "This pullover sweater is so cozy for the winter weather. Throw over jeans and leggings for an outfit that's always in style.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "Cardigan",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700595097/Cardigan_fhbiht.jpg",
      gender: "girls",
      category: "shirts",
      price: 34.95,
      description: "Crafted in soft cotton with sweet buttons up the front, this cardigan goes best over her favorite looks.",
      payBtn: "https://buy.stripe.com/8wM9E5aeR7xr8SIdQU"
    },
    {
      name: "Floral Graphic Tee",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700595086/Floral_Graphic_Tee_pxsp0q.webp",
      gender: "girls",
      category: "shirts",
      price: 15.95,
      description: "You can't go wrong with a graphic tee! Made with an OshKosh exclusive design and pairs perfectly with their favorite classic jean jacket.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "Soft Chenille Sweater",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700595086/Soft_Chenille_Sweater_rdqbgf.webp",
      gender: "girls",
      category: "shirts",
      price: 34.95,
      description: "So soft and cozy for the changing season, this simple sweater pairs well with everything.",
      payBtn: "https://buy.stripe.com/8wM9E5aeR7xr8SIdQU"
    },
    {
      name: "Peplum Pocket Tee",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700595098/Peplum_Pocket_Tee_uczvsj.jpg",
      gender: "girls",
      category: "shirts",
      price: 15.95,
      description: "Crafted in soft cotton with a peplum hem, this pocket tee is perfect for her.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
   
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
   
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});

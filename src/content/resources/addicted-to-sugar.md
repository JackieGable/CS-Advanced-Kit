---
title: Addicted to Sugar
tags:
    - post
    - resources
---

headline: When you are addicted to sugar, this is your text filler.
description: When you're addicted to sugar, this is your filler text.
eleventyNavigation:
  key: Addicted to Sugar
  parent: resources
featuredImage1:
  images:
    - https://picsum.photos/600/400
    - https://picsum.photos/800/600
  content: >-
    ## Are You Addicted To Sugar?


When you're addicted to sugar, this is your filler text: jolly ranchers, tootsie pops, m&ms, fudge, twizzlers, black licorice, marshmallows, candy corn, chocolate bunnies, mary sue easter eggs, cow tails, butterfinger, milky way, three musketeers, hershey bars, chocolate kisses, peppermint patties, peppermint bark, candy canes, peanut brittle, popcorn balls, candy apples, sour patch kids, sweet tarts, mike and ike, marshmallow peeps, snickers, almond joy, mounds bar, peanut butter cups, lemon drops, twix, kitkat, skor, cinnamon discs, raisinettes, fifth avenue, heath bar, payday, rollos, fruit rollups, skittles, nestle crunch, now and later, baby ruth bars, cadbury eggs,lemon drops, twix, kitkat, skor, cinnamon discs, raisinettes, fifth avenue, heath bar, payday, rollos, fruit rollups, skittles, nestle crunch, now and later, baby ruth bars, cadbury eggs, oh henry bars, junior mints, neccos, fireballs, jawbreakers, bazooka bubble gum pop rocks jelly belly sugar daddy jelly beans cracker jacks clark bar bit-o-honey mary janes 100 grand circus peanuts starburst lifesavers gobstoppers runts krackel gummy bears gummy worms milk duds malt balls cotton candy tootsie rolls chocolate covered cherries dark chocolate raisins reeces pieces caramello caramel cremes rollos nestle crunch now and later baby ruth bars cadbury eggs oh henry bars junior mints neccos fireballs jawbreakers bazooka bubble gum pop rocks jelly belly sugar daddy jelly beans cracker jacks clark bar bit-o-honey mary janes 100 grand circus peanuts starburst lifesavers heath bars oreo cookies animal crackers sweedish fish


    * **Candy:** bit-o-honey mary janes 100 grand circus peanuts

    * **Cookies:** brownies, sugar cookies, chocolate chip cookies

    * **Cake:** Coconut Cake, Carrot Cake, Fudge Cake

    * **Pies:** Lemon Meringue, Key Lime, Tart Cherry, Pecan Pie

    * **IceCream:** Vanilla, Chocolate, Chubby Hubby

featuredImage2:
  images:
    - https://res.cloudinary.com/demo/image/upload/w_1000/f_auto,q_auto/sheep.jpg
    - https://res.cloudinary.com/demo/image/upload/w_1000/f_auto,q_auto/dog.jpg
  content: >-
    ## Your Journey to a Sugar-Free Life Begins Here


Fear of grocery shopping just got easier. No more worries about filling your cart with: starburst, lifesavers, gobstoppers, runts, krackel, gummy bears, gummy worms, milk duds, malt balls, cotton candy, tootsie rolls, chocolate covered cherries, dark chocolate raisins, reeces pieces, caramello, caramel cremes, rollos, nestle crunch, now and later, baby ruth bars, cadbury eggs, oh henry bars, junior mints, neccos, fireballs, jawbreakers, bazooka bubble gum, pop rocks, jelly belly, sugar daddy, jelly beans, cracker jacks, clark bar, bit-o-honey, mary janes, 100 grand, circus peanuts, starburst, lifesavers, heath bars, oreo cookies, animal crackers, sweedish fish, jolly ranchers, tootsie pop, m&ms, fudge, twizzlers, black licorice,


gallery:
  header:
    title: A Glimpse of Our Favorite Culprits
    subtitle: The Sweetless Revenge
#   LOOP THROUGH LIST AND OUTPUT HERE AS GALLERY use src/content/resources/_data/candy-list.json and display image and details about the image. 


{% for candyKey, candy in candy-list %}
<div>
    <img src="{{ candy.imageURL or candy.image }}" alt="{{ candy.name }}">
    <h4>{{ candy.name }}</h4>
    <p>Flavors: {{ candy.flavor | join(", ") }}</p>
    <p>Texture: {{ candy.texture }}</p>
</div>
{% endfor %}

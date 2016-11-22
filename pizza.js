class pizza{
  //type constructor below
  consructor (s,mT,vT){
    this.size = s;
    this.meatToppings = mT;
    this.veggieToppings= vT;
  }

  //type instance functions below
  sizeCost(){
    if(this.size=="s" || this.size=="S"){
      return 7.99;
    }
    else if(this.size=="M"){
      return 9.99;
    }
    else if(this.size=="L"){
      return 12.99;
    }
    else if(this.size=="XL"){
      return 15.99;
    }
  }

  //type class functions below
  toppingCost(top){
    if(this.top==meatToppings){
      this.toppingCost=meatToppings.length*.99;
      return this.toppingCost;
    }
    else if(this.top==veggieToppings){
      this.toppingCost=veggieToppings.length*.50;
      return this.toppingCost;
    }
  }
  price(){
    return this.sizeCost()+this.toppingCost("meatToppins","veggieToppings");
  }
  static promotionalDeal(pizza,percentage){
    let decimal = percent/100;
    return pizza.price()-pizza.price()*decimal;
  }
  addTopping(toptype,newtype){
    if(toptype=="meat"){
      this.meatToppings.push(newtop);
    }
    else if(toptype="veggie"){
      this.veggieToppings.push(newtop);
    }
  }
}

class pizza{
  //type constructor below
  consructor (s,mT,vT){
    this.size = s;
    this.meatToppings = mT;
    this.veggieToppings= vT;
  }

  //type instance functions below
  sizeCost(){
    if(this.size=="small"){
      this.sizeCost=7.99;
      return this.sizeCost;
    }
    else if(this.size=="medium"){
      this.sizeCost=9.99;
      return this.sizeCost;
    }
    else if(this.size=="large"){
      this.sizeCost=12.99;
      return this.sizeCost;
    }
    else{
      this.sizeCost=15.99;
      return this.sizeCost;
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
    return this.sizeCost+this.toppingCost;
  }
  static promotionalDeal(pizza,percentage){
    promotionalDeal=pizza*percentage;
    return promotionalDeal;
  }
  addTopping(toptype,newtype){
    if(toptype=="meat"){
      this.meatToppings.push(newtop);
    }
    else if(toptype="veggie"){
      this.veggieToppings.push(newtop);
    }
  }
  removeTopping(toptype,newtype){
    if()
  }
}

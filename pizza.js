xclass pizza{
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
    else(this.size=="large"){
      this.sizeCost=12.99;
      return this.sizeCost;
    }
    else(this.size=="extra large"){
      this.sizeCost=15.99;
      return this.sizeCost;
    }
  }

  //type class functions below
  toppingCost(top){
    if(this.top==meatToppings){
      this.toppingCost=this.meatToppings.length*.99;
      return this.toppingCost;
    }
    else if(this.top==veggieToppings){
      this.toppingCost=this.veggieToppings.length*.50;
      return this.toppingCost;
    }
  }
  price(){
    return this.sizeCost+this.toppingCost;
  }
  static promotionalDeal(p,pt){
    this.pizza=p;
    this.percentage=pt;
    new price()=
  }
  addTopping()
}

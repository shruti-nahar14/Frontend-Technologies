class product
{
    constructor(itemName)
    {
        this.itemName=itemName;
    }
    get getItemname()
    {
        return this.itemName +' is a product class ';
    }
};
class furniture extends product{
    constructor(itemName)
    {
        super(itemName);
    }
    get getItemname1()
    {
        return this.itemName+'is a furniture class ';
    }
}
let shoes =new product("shoes");
console.log(shoes.getItemname);
let chair=new furniture("chair");
console.log(chair.getItemname1);
console.log(chair.getItemname+'can access parent class constructor using super()');
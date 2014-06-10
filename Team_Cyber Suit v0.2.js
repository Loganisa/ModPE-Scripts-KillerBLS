/*          Users script Creeplays, if you do not mind, I'll change it           */

jetpack=true;
glider=true;
cannon=true;
gravigun=true;
charge=0;
function addPegLegToRenderer(renderer) {
var s = renderer.getModel().getPart("body");
s.setTextureOffset(999, 999);
if (jetpack)
{
s.addBox(-3.0, 1.0, 3, 6 , 9, 3, 0);
s.addBox(-3.0, 2.0, 2, 6 , 9, 3, 0);
s.addBox(-3.0, 0, 2, 6 , 9, 3, 0);
}

var s = renderer.getModel().getPart("rightArm");
if(gravigun)
{
s.addBox(1, 3.0, -1, 2 , 9,2);
s.addBox(-5.0, 3.0, -1, 2 , 9,2);
s.addBox(-2.0, 3.0, -4, 2 , 9,2);
s.addBox(-2.0, 3.0, 2, 2 , 9,2);
}
if(cannon)
{
s.addBox(-2.0, 4.0, -1, 2 , 9,2);
}
}
function useItem(x,y,z,item)
{
if (item==249){
preventDefault();
data=Player.getCarriedItemData();
addItemInventory(249,-1);
addItemInventory(249,1,data+500);
}
}
function newLevel()
{
Block.defineBlock(249, "Energy unit",[["redstone_block", 0]], 1,null, 0);
Item.setMaxDamage(249, 1000000);
Item.addCraftRecipe(249, 1, 1000000, [340, 0, 1, 264, 0, 2, 49, 0, 4]);
addPegLegToRenderer(Renderer.get(3)); //player
addPegLegToRenderer(Renderer.get(16)); //player (multiplayer)
}


function modTick()
{
if(getCarriedItem()==295)
{

}
}
function adden(s,x,y,z,l,a,b,c)
{
for(var i=0;i<=l;i++){
s.setTextureOffset(999,999);
s.addBox(x+i*a, y+i*b, z+i*c, 1, 1, 1);
if(l%3==0)add2(s,x+i*a, y+i*b, z+i*c,i/3,a,-b*2,c)
}
}
function add2(s,x,y,z,l,a,b,c)
{
for(var i=0;i<=l;i++){
s.setTextureOffset(999,999);
s.addBox(x+i*a, y+i*b, z+i*c, 1, 1, 1);
}
}

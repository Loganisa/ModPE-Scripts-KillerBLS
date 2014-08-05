var Ydiff = 0;
var part = ParticleType.smoke;
 
function procCmd(cmd)
{
if(cmd=="effect 1")
{
part = ParticleType.crit;
}
if(cmd=="effect 2")
{
part = ParticleType.flame;
}
if(cmd=="effect 3")
{
part = ParticleType.heart;
}
if(cmd=="effect 4")
{
part = ParticleType.cloud;
}
if(cmd=="effect 5")
{
part = ParticleType.lava;
}
if(cmd=="effect 6")
{
part = ParticleType.redstone;
}
if(cmd=="effect 7")
{
part = ParticleType.snowballpoof;
}
if(cmd=="effect 0")
{
part = ParticleType.smoke;
}
}
 
function modTick()
{
Level.addParticle(part.toString(),getPlayerX(),getPlayerY()-0.5+Ydiff,getPlayerZ()-1.5,0,0,0,2);
Level.addParticle(part.toString(),getPlayerX(),getPlayerY()-0.5+Ydiff,getPlayerZ()+1.3,0,0,0,2);
Level.addParticle(part.toString(),getPlayerX()-1.2,getPlayerY()-0.5+Ydiff,getPlayerZ(),0,0,0,2);
Level.addParticle(part.toString(),getPlayerX()+0.3,getPlayerY()-0.5+Ydiff,getPlayerZ(),0,0,0,2);
Level.addParticle(part.toString(),getPlayerX(),getPlayerY()-0.5+Ydiff,getPlayerZ()-0.47,0,0,0,2);
Level.addParticle(part.toString(),getPlayerX(),getPlayerY()-0.5+Ydiff,getPlayerZ()+0.5,0,0,0,2);
Level.addParticle(part.toString(),getPlayerX()-0.2,getPlayerY()-0.5+Ydiff,getPlayerZ(),0,0,0,2);
Level.addParticle(part.toString(),getPlayerX()+1.2,getPlayerY()-0.5+Ydiff,getPlayerZ(),0,0,0,2);
}

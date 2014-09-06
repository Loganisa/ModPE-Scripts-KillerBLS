var blood = false;
var mob;
 
function newLevel()
{
clientMessage(ChatColor.RED + "Extra Blood Mod by KillerBLS");
}
 
function attackHook(attacker,victim)
{
mob = victim;
blood = true;
Level.addParticle(ParticleType.redstone,Entity.getX(mob),Entity.getY(mob)+2,Entity.getZ(mob),0,0,0,2);
}
 
function modTick()
{
if(blood==true)
{
Level.addParticle(ParticleType.redstone,Entity.getX(mob)-0.5,Entity.getY(mob)+1,Entity.getZ(mob),0,0,0,2);
 
Level.addParticle(ParticleType.redstone,Entity.getX(mob)+0.5,Entity.getY(mob)+1,Entity.getZ(mob),0,0,0,2);
 
Level.addParticle(ParticleType.redstone,Entity.getX(mob),Entity.getY(mob)+1,Entity.getZ(mob)+0.5,0,0,0,2);
 
Level.addParticle(ParticleType.redstone,Entity.getX(mob),Entity.getY(mob)+1,Entity.getZ(mob)-0.5,0,0,0,2);
}
}

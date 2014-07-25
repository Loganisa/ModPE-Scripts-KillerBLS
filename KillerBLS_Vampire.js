function attackHook(attacker,victim)
{
Entity.setHealth(attacker,20);
Entity.setHealth(victim,0);
clientMessage(ChatColor.RED + "More Blood!!");
}

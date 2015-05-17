function attackHook(attacker, victim)
{
if(getCarriedItem()==280)
{
ModPE.setCamera(victim);
preventDefault()
}
}

function procCmd(cmd)
{
  if(cmd=="playerCam")
  {
    ModPE.setCamera(getPlayerEnt());
  }
}

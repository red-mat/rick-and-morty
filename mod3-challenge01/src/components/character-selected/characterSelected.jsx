import useTransitionEffect from '../../hooks/useTransitionEffects/useTransitionEffect';
import './characterSelected.css';
import opacity_transition from '../../hooks/useTransitionEffects/transition_effects/opacity_transition';

export default function CharacterSelected({ characterImg }) {
  const [character_avatar, opacity_avatar] = useTransitionEffect(
    characterImg,
    opacity_transition(350)
  );

  return (
    <div className='container'>
      <img
        className='container__avatar'
        style={opacity_avatar}
        src={character_avatar}
        alt='avatar'
      />
    </div>
  );
}

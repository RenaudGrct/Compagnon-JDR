import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';

import stats from 'src/assets/Data/stats.json';

import './diceRoll.scss';

export default function DiceRoller({
  result,
  diceRoll,
  handleChange,
  diceResultOne,
  diceResultTwo,
  diceResultThree,
  diceResultFour,
  isDiceSum,
  statsDropdown,
}) {
  return (

    <div className="result_diceRoll">

      <div className="result_diceRoll_container">
        <p className="result_diceRoll_container_title"> {result}</p>
        <div className="result_dice_container">
          <div className="minicube__face">{diceResultOne}</div>
          <div className="minicube__face">{diceResultTwo}</div>
          <div className="minicube__face">{diceResultThree}</div>
          <div className="minicube__face">{diceResultFour}</div>
        </div>
      </div>
      <FormControl variant="standard" sx={{ width: '100%', marginTop: '1rem' }}>
        <InputLabel sx={{ color: 'primary.contrastText' }}>Stat</InputLabel>
        <Select
          value={statsDropdown}
          label="stats"
          onChange={(e) => handleChange(e)}
          sx={{ width: '10rem', marginTop: '1rem', color: 'primary.contrastText' }}
        >
          {
            stats.map((stat) => (

              <MenuItem
                key={stat.sourceName}
                value={stat.sourceName}
              >
                {stat.localizedName}
              </MenuItem>

            ))
          }

        </Select>
      </FormControl>
      {!isDiceSum && (
        <Button
          color="primary"
          variant="contained"
          type="button"
          sx={{
            width: '5rem',
            marginTop: '3rem',
          }}
          onClick={diceRoll}
        >
          Lancer
        </Button>
      )}
    </div>

  );
}

DiceRoller.propTypes = {
  result: PropTypes.string.isRequired,
  diceRoll: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  diceResultOne: PropTypes.string.isRequired,
  diceResultTwo: PropTypes.string.isRequired,
  diceResultThree: PropTypes.string.isRequired,
  diceResultFour: PropTypes.string.isRequired,
  isDiceSum: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/require-default-props
  statsDropdown: PropTypes.string,
};

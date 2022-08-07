import {
  HANDLE_DICE_CLASS,
  SUM_DICE_THROW_ONE,
  SUM_DICE_THROW_TWO,
  SUM_DICE_THROW_THREE,
  SUM_DICE_THROW_FOUR,
  SUM_DICE_THROW_FIVE,
  SUM_DICE_THROW_SIX,
  RESET_THROWS,
  CHANGE_NAME_INPUT,
  SELECT_RACE,
  SELECT_CLASS,
  HANDLE_MODAL_IS_CLOSED,
  SELECT_BACKGROUND,
  SELECT_STAT,
  GET_RACE_SUCCESS,
  GET_CLASS_SUCCESS,
  RACE_IS_FETCHED,
  CLASS_IS_FETCHED,
  TOGGLE_IS_FETCHED,
  GET_BACKGROUND_SUCCESS,
  // BACKGROUND_IS_FETCHED,
  SUBMIT_CHARACTER_CREATION_SUCCESS,
  SUBMIT_CHARACTER_DELETION,
  SUBMIT_CHARACTER_DELETION_SUCCESS,
  SELECT_SKILLS,
  GET_ALL_CHARACTERS_SUCCESS,
  CLEAR_CHARACTERS,
  GET_CHARACTER_SUCCESS,
  STORE_CHARACTER_ID,
} from 'src/actions/characters';

export const initialState = {

  raceIsFetched: false,
  classIsFetched: false,
  backgroundIsFetched: false,
  characterIsDelete: false,

  character: {
    selectedCharacter: [],
    storedCharacterId: '',
    myCharacters: [],
    name: '',
    selectedRace: '',
    selectedBackground: '',
    selectedClass: '',
    racialAbility: '',
    classAbility: '',
    // featureChoice: {
    //   id: '',
    //   name: '',
    //   description: '',
    // },
    constitution: '',
    intelligence: '',
    modalIsClosed: true,
    fetchedCharacterRaceObject: [],
    fetchedCharacterClassObject: [],
    skills: null,
    backgrounds: '',

  },

  dice: {
    result: {
      diceResultOne: 1,
      diceResultTwo: 3,
      diceResultThree: 5,
      diceResultFour: 2,
      diceResultBestThree: 10,

    },
    resultDisplay: {
      sumOne: '',
      sumTwo: '',
      sumThree: '',
      sumFour: '',
      sumFive: '',
      sumSix: '',
      isDiceSumOne: false,
      isDiceSumTwo: false,
      isDiceSumThree: false,
      isDiceSumFour: false,
      isDiceSumFive: false,
      isDiceSumSix: false,
      miniDice1: '',
      miniDice2: '',
      miniDice3: '',
      miniDice4: '',
      miniDice5: '',
      miniDice6: '',
      miniDice7: '',
      miniDice8: '',
      miniDice9: '',
      miniDice10: '',
      miniDice11: '',
      miniDice12: '',
      miniDice13: '',
      miniDice14: '',
      miniDice15: '',
      miniDice16: '',
      miniDice17: '',
      miniDice18: '',
      miniDice19: '',
      miniDice20: '',
      miniDice21: '',
      miniDice22: '',
      miniDice23: '',
      miniDice24: '',
    },
  },

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_NAME_INPUT:
      return {
        ...state,
        character: {
          ...state.character,
          name: action.newValue,
        },
      };
    case SELECT_RACE:
      return {
        ...state,
        character: {
          ...state.character,
          selectedRace: action.selectedRace,
          modalIsClosed: false,
        },
      };
    case SELECT_CLASS:
      return {
        ...state,
        character: {
          ...state.character,
          selectedClass: action.selectedClass,
          modalIsClosed: false,
        },
      };
    case SELECT_BACKGROUND:
      return {
        ...state,
        character: {
          ...state.character,
          selectedBackground: action.selectedBackground,
          modalIsClosed: false,
        },
      };
    case HANDLE_DICE_CLASS:
      return {
        ...state,
        dice: {
          ...state.dice,
          result: {
            ...state.dice.result,
            [action.diceResult]: action.number,
          },
          resultDisplay: {
            ...state.dice.resultDisplay,
            [action.miniDiceResult]: action.number,
          },
        },
      };
    case SUM_DICE_THROW_ONE:
      return {
        ...state,
        dice: {
          ...state.dice,
          resultDisplay: {
            ...state.dice.resultDisplay,
            sumOne: action.list,
            isDiceSumOne: true,
          },
        },
      };
    case SUM_DICE_THROW_TWO:
      return {
        ...state,
        dice: {
          ...state.dice,
          resultDisplay: {
            ...state.dice.resultDisplay,
            sumTwo: action.list,
            isDiceSumTwo: true,
          },
        },
      };
    case SUM_DICE_THROW_THREE:
      return {
        ...state,
        dice: {
          ...state.dice,
          resultDisplay: {
            ...state.dice.resultDisplay,
            sumThree: action.list,
            isDiceSumThree: true,
          },
        },
      };
    case SUM_DICE_THROW_FOUR:
      return {
        ...state,
        dice: {
          ...state.dice,
          resultDisplay: {
            ...state.dice.resultDisplay,
            sumFour: action.list,
            isDiceSumFour: true,
          },
        },
      };
    case SUM_DICE_THROW_FIVE:
      return {
        ...state,
        dice: {
          ...state.dice,
          resultDisplay: {
            ...state.dice.resultDisplay,
            sumFive: action.list,
            isDiceSumFive: true,
          },
        },
      };
    case SUM_DICE_THROW_SIX:
      return {
        ...state,
        dice: {
          ...state.dice,
          resultDisplay: {
            ...state.dice.resultDisplay,
            sumSix: action.list,
            isDiceSumSix: true,
          },
        },
      };
    case RESET_THROWS:
      return {
        ...state,
        character: {
          ...state.character,
          strength: '',
          charisma: '',
          dexterity: '',
          wisdom: '',
          constitution: '',
          intelligence: '',
        },
        dice: {
          ...state.dice,
          resultDisplay: {
            ...state.dice.resultDisplay,
            isDiceSumOne: false,
            sumOne: '',
            isDiceSumTwo: false,
            sumTwo: '',
            isDiceSumThree: false,
            sumThree: '',
            isDiceSumFour: false,
            sumFour: '',
            isDiceSumFive: false,
            sumFive: '',
            isDiceSumSix: false,
            sumSix: '',
            miniDice1: '',
            miniDice2: '',
            miniDice3: '',
            miniDice4: '',
            miniDice5: '',
            miniDice6: '',
            miniDice7: '',
            miniDice8: '',
            miniDice9: '',
            miniDice10: '',
            miniDice11: '',
            miniDice12: '',
            miniDice13: '',
            miniDice14: '',
            miniDice15: '',
            miniDice16: '',
            miniDice17: '',
            miniDice18: '',
            miniDice19: '',
            miniDice20: '',
            miniDice21: '',
            miniDice22: '',
            miniDice23: '',
            miniDice24: '',

          },
        },
      };
    case HANDLE_MODAL_IS_CLOSED:
      return {
        ...state,
        character: {
          ...state.character,
          modalIsClosed: true,
        },
      };
    case SELECT_STAT:
      return {
        ...state,
        character: {
          ...state.character,
          [action.key]: action.number,

        },

      };
    case GET_CLASS_SUCCESS:
      return {
        ...state,
        character: {
          ...state.character,
          fetchedCharacterClassObject: action.response,
        },
      };

    case GET_RACE_SUCCESS:
      return {
        ...state,
        character: {
          ...state.character,
          fetchedCharacterRaceObject: action.response,
        },
      };

    case SUBMIT_CHARACTER_DELETION:
      return {
        ...state,
        characterIsDelete: false,
      };

    case SUBMIT_CHARACTER_DELETION_SUCCESS:
      return {
        ...state,
        characterIsDelete: true,
      };

    case SUBMIT_CHARACTER_CREATION_SUCCESS:
      return {
        ...state,

        raceIsFetched: false,
        classIsFetched: false,
        backgroundIsFetched: false,

        character: {
          ...state.character,
          name: '',
          selectedRace: '',
          selectedBackground: '',
          selectedClass: '',
          racialAbility: '',
          classAbility: '',
          strength: '',
          charisma: '',
          dexterity: '',
          wisdom: '',
          constitution: '',
          intelligence: '',
          modalIsClosed: true,
          fetchedCharacterRaceObject: '',
          fetchedCharacterClassObject: '',
          backgrounds: '',

          resultDisplay: {
            ...state.resultDisplay,

            sumOne: '',
            sumTwo: '',
            sumThree: '',
            sumFour: '',
            sumFive: '',
            sumSix: '',
            isDiceSumOne: false,
            isDiceSumTwo: false,
            isDiceSumThree: false,
            isDiceSumFour: false,
            isDiceSumFive: false,
            isDiceSumSix: false,
            miniDice1: '',
            miniDice2: '',
            miniDice3: '',
            miniDice4: '',
            miniDice5: '',
            miniDice6: '',
            miniDice7: '',
            miniDice8: '',
            miniDice9: '',
            miniDice10: '',
            miniDice11: '',
            miniDice12: '',
            miniDice13: '',
            miniDice14: '',
            miniDice15: '',
            miniDice16: '',
            miniDice17: '',
            miniDice18: '',
            miniDice19: '',
            miniDice20: '',
            miniDice21: '',
            miniDice22: '',
            miniDice23: '',
            miniDice24: '',
          },

        },
      };
    case GET_BACKGROUND_SUCCESS:
      return {
        ...state,
        backgroundIsFetched: true,
        character: {
          ...state.character,
          backgrounds: action.response,
        },
      };
    case RACE_IS_FETCHED:
      return {
        ...state,
        raceIsFetched: true,
      };
    case CLASS_IS_FETCHED:
      return {
        ...state,
        classIsFetched: true,
      };
      // case BACKGROUND_IS_FETCHED:
      //   return {
      //     ...state,
      //     backgroundIsFetched: true,
      //   };

    case TOGGLE_IS_FETCHED:
      return {
        ...state,
        raceIsFetched: false,
        classIsFetched: false,
        backgroundIsFetched: false,
      };
    case SELECT_SKILLS:
      return {
        ...state,
        character: {
          ...state.character,
          skills: [action.skill[0].id, action.skill[1]?.id],
        },
      };
    case GET_ALL_CHARACTERS_SUCCESS:
      return {
        ...state,
        character: {
          ...state.character,
          myCharacters: action.response,
        },
      };

    case CLEAR_CHARACTERS:
      return {
        ...state,
        character: {
          ...state.character,
          myCharacters: [],
        },
      };

    case GET_CHARACTER_SUCCESS:
      return {
        ...state,
        character: {
          ...state.character,
          view: action.response,

          selectedCharacterName: action.response.name,
          selectedCharacterClass: action.response.class.name,
          proficiencies: action.response.class.proficiencies,
          features: action.response.class.features,
          selectedCharacterRace: action.response.race.name,
          langue: action.response.race.language,
          abilityRace: action.response.race.racial_ability,
          selectedCharacterBackground: action.response.background.name,
          abilityBackground: action.response.background.ability,
          abilityBackgroundDescription: action.response.background.ability_description,
          selectedCharacterSkills: action.response.background.skill,
          selectedStrenght: action.response.ability_score.strength,
          selectedDexterity: action.response.ability_score.dexterity,
          selectedConstitution: action.response.ability_score.constitution,
          selectedWisdom: action.response.ability_score.wisdom,
          selectedIntelligence: action.response.ability_score.intelligence,
          selectedCharisma: action.response.ability_score.charisma,

        },
      };
    case STORE_CHARACTER_ID:
      return {
        ...state,
        character: {
          ...state.character,
          storedCharacterId: action.id,
        },
      };
    default:
      return state;
  }
};

export default reducer;

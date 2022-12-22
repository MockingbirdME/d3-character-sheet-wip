import createError from 'http-errors';
import { Router } from 'express';

import cloudant from '../lib/cloudant.js'
import characterList from '../data/characterList.js'
import Character from '../classes/Character.js';

export const characterRouter = new Router();

function listCharacters(req, res) {
  Character.fetchCharacterList()
    .then(list => {
      res.json(list)
    })
}

function fetchCharacter(req, res) {
  cloudant.getDocument(req.params.characterId.toLowerCase())
    .then(({result}) => {
      const character = new Character(result);
      res.json({id: result._id, rev: result._rev, character: character.toJSON()})
    })
    .catch(error => {
      console.log(error);
      res.send(error)
    })
}

function saveCharacter(req, res) {
  const characterData = JSON.parse(req.body);
  
  cloudant.getDocument(req.params.characterId.toLowerCase())
    .then(async ({result}) => {
      const character = new Character(result);
      
      if (characterData.name) character._name = characterData.name;
      if (characterData.advancementPoints) character._advancementPoints = characterData.advancementPoints;
      if (characterData.backgrounds) character._backgrounds = characterData.backgrounds;
      if (characterData.attributes) character._attributes = characterData.attributes;
      if (characterData.skills) character._skills = characterData.skills;

      await character.save();
      res.json({id: result._id, rev: result._rev, character: character.toJSON()})
    })
    .catch(error => {
      console.log(error);
      res.send(error)
    })
}

characterRouter.get('/list', listCharacters)

characterRouter.get('/:characterId', fetchCharacter)
characterRouter.patch('/:characterId', saveCharacter)
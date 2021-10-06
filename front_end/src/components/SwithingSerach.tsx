import React, { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import SearchPrivate from './SearchPrivateGmap';
import SearchPublic from './SearchPublicGmap';
import CreateGmap from './createGmaps';

const SwithingSearch: React.FC = () => {
  const [searchGmap, setSearchGmaps] = useState(true);
  const [radio, setRadio] = useState(true);

  return (
    <>
      <FormControl component="label">
        <FormLabel component="label">マップを公開するかしないか？</FormLabel>
        <RadioGroup aria-label="select_map" name="public_or_private">
          <FormControlLabel
            value="public_check"
            onChange={() => setSearchGmaps(true)}
            control={<Radio />}
            label="マップ検索"
          />
          <FormControlLabel
            value="private_check"
            onChange={() => setSearchGmaps(false)}
            control={<Radio />}
            label="マップを作成"
          />
        </RadioGroup>
      </FormControl>

      {searchGmap ? (
        <div>
          <FormControl component="label">
            <FormLabel component="label">公開非公開どちらのGmapを検索するか？</FormLabel>
            <RadioGroup aria-label="select_map" name="public_or_private">
              <FormControlLabel
                value="public_check"
                onChange={() => setRadio(true)}
                control={<Radio />}
                label="公開公開されされているマップ検索"
              />
              <FormControlLabel
                value="private_check"
                onChange={() => setRadio(false)}
                control={<Radio />}
                label="公開されないマップ検索"
              />
            </RadioGroup>
          </FormControl>
        </div>
      ) : (
        <CreateGmap />
      )}
      {searchGmap ? radio ? <SearchPublic /> : <SearchPrivate /> : null}
    </>
  );
};

export default React.memo(SwithingSearch);

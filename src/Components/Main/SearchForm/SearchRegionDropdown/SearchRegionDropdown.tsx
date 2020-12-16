import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import * as regions from '../../../../Data/Regions/Regions.json';
import {
  Dropdown,
  DropdownBox,
  DropdownBoxContents,
  DropdownIconWrapper,
  DropdownLabel,
  DropdownList,
  DropdownListContents,
  DropdownListItemOption,
  DropdownListItemText,
  DropdownSelectedValueText,
  LabelWrapper,
} from './SearchRegionDropdown.styles';
import { HorizontalRule } from '../../../Styles/Common/HorizontalRule';

interface Platform {
  name: string;
  value: string;
}

interface SearchRegionDropdownProps {
  onChangeHandler: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  initialRegion: string;
}

const initialRegionDisplayValue = (
  platforms: Platform[],
  initialRegion: string
) => {
  const array = platforms.filter(
    (platform) => platform.value === initialRegion
  );

  if (array.length !== 0) {
    return array[0].name;
  }

  return '';
};

const SearchRegionDropdown = ({
  onChangeHandler,
  initialRegion,
}: SearchRegionDropdownProps) => {
  const platforms: Platform[] = regions.platform;

  const [expanded, setExpanded] = useState(false);
  const [regionDisplayValue, setRegionDisplayValue] = useState(
    initialRegionDisplayValue(platforms, initialRegion)
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('blur', () => {
      dropdownRef.current?.blur();
    });
  }, [dropdownRef]);

  return (
    <>
      <Dropdown>
        <LabelWrapper>
          <DropdownLabel>Region</DropdownLabel>
        </LabelWrapper>

        <DropdownBox
          length={platforms.length}
          tabIndex={-1}
          ref={dropdownRef}
          onFocus={() => {
            setExpanded(true);
          }}
          onBlur={() => {
            setExpanded(false);
          }}
          expanded={expanded}
        >
          <DropdownBoxContents>
            <DropdownSelectedValueText>
              {regionDisplayValue}
            </DropdownSelectedValueText>
            <DropdownIconWrapper
              onClick={() => {
                if (expanded) {
                  dropdownRef.current?.blur();
                } else {
                  dropdownRef.current?.focus();
                }
              }}
            >
              {!expanded && <ChevronDown size={24} />}
              {expanded && <ChevronUp size={24} />}
            </DropdownIconWrapper>
          </DropdownBoxContents>

          <DropdownList expanded={expanded}>
            <HorizontalRule width="full" padding={8} />

            <DropdownListContents>
              {platforms.map((platform) => (
                <DropdownListItemOption
                  key={platform.value}
                  value={platform.value}
                  onClick={({ target }) => {
                    onChangeHandler(
                      'rebelsSummonerRegion',
                      (target as HTMLElement).getAttribute('value')
                    );
                    setRegionDisplayValue(platform.name);
                    dropdownRef.current?.blur();
                  }}
                >
                  <DropdownListItemText>{platform.name}</DropdownListItemText>
                </DropdownListItemOption>
              ))}
            </DropdownListContents>
          </DropdownList>
        </DropdownBox>
      </Dropdown>
    </>
  );
};

export { SearchRegionDropdown };

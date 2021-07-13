interface MetadataDTO {
  data_version: string;
  match_id: string;
  participants: string[];
}

interface CompanionDTO {
  content_ID: string;
  skin_ID: number;
  species: string;
}

interface TraitsDTO {
  name: string;
  num_units: number;
  style: number;
  tier_current: number;
  tier_total: number;
}

interface UnitsDTO {
  items: number[];
  character_id: string;
  chosen?: string;
  name: string;
  rarity: number;
  tier: number;
}

interface ParticipantDTO {
  companion: CompanionDTO;
  gold_left: number;
  last_round: number;
  level: number;
  placement: number;
  players_eliminated: number;
  puuid: string;
  time_eliminated: number;
  total_damage_to_players: number;
  traits: TraitsDTO[];
  units: UnitsDTO[];
}

interface InfoDTO {
  game_datetime: number;
  game_length: number;
  game_variation: string;
  game_version: string;
  participants: ParticipantDTO[];
  queue_id: number;
  tft_set_number: number;
}

interface MatchDTO {
  metadata: MetadataDTO;
  info: InfoDTO;
}

export type { MatchDTO, UnitsDTO };

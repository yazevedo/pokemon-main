import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, PokemonCardComponent], // <-- IMPORTANTE!
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList(20).subscribe(response => {
      const results = response.results;
      results.forEach((pokemon: any) => {
        this.pokemonService.getPokemonDetails(pokemon.name).subscribe(data => {
          this.pokemons.push(data);
        });
      });
    });
  }
}

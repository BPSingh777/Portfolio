import {Component} from '@angular/core';
import {ProjectCardComponent} from "../project-card/project-card.component";
import {CardData} from "../models/card-data";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-porfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  imports: [
    ProjectCardComponent,
    NgTemplateOutlet
  ],
  standalone: true
})
export class PortfolioComponent {
  cards: Array<CardData> = new Array<CardData>();

  constructor() {

    const SimplyChessCard: CardData = {
      title: "Simply Chess",
     description: "Real-time multiplayer chess platform offering private matches to compete securely, along with a matchmaking queue for a smooth and uninterrupted experience.",
      sourceCodeLink: "https://github.com/shackGerc/Simply-Chess",
      createdWith: ["Spring Boot", "Angular", "Bootstrap", "SockJS", "Stomp", "WebSocket", "PostgreSQL"],
      imageSrc: "assets/projects/SimplyChess.webp"
    } as CardData

    const InventoryApiCard: CardData = {
      title: "Inventory API",
    description: "As part of the Integrative Practical Work (TPI) for the University Programming Technician degree at UTN-FRC in 2023, we collaborated on developing an application for managing a hardware store based on microservices. Our group was responsible for designing and developing the inventory module. This is the result of our work.",
      sourceCodeLink: "https://github.com/shackGerc/Inventory-API",
      createdWith: ["Spring Boot", "PostgreSQL"],
      imageSrc: "assets/projects/inventory.webp"
    } as CardData

    const RallyRoundCard: CardData = {
      title: "RallyRound",
    description: "RallyRound is an application developed as part of the Final Integrative Practical Work of the University Programming Technician degree at UTN-FRC in 2024. This platform solves the difficulty of organizing and gathering participants for social events. With RallyRound, users can create, manage, and join events, leveraging features like efficient participant search, integrated payment management, and real-time chat communication. Additionally, the app offers automatic event status updates and instant notifications, providing advanced tools for activity management and reporting. RallyRound guarantees a smooth and comprehensive experience for organizing any type of social event.",
      sourceCodeLink: "https://github.com/FabioGabrielSager/RallyRound/tree/main",
      createdWith: [
        "Spring Boot", "Spring Security", "Spring Data JPA", "JWT", "WebSockets",
        "Mercado Pago", "Bing Maps API", "Reactor", "Angular", "Bootstrap", "rx-stomp", "bootstrap",
        "chat-js", "PostgreSQL"
      ],
      imageSrc: "assets/projects/RallyRound.webp"
    } as CardData

    this.cards.push(RallyRoundCard)
    this.cards.push(SimplyChessCard);
    this.cards.push(InventoryApiCard)
  }
}

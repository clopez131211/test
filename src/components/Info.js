import React, { Component } from "react";
import Title from "./Title";
export default class Info extends Component {
  render() {
    return (
      <section className="services">
        <Title title="Llama" />
        <div className="about-llama">
          <p>
            <strong className="intro">Common Name</strong>
            <span>: Llama</span>
          </p>
          <p>
            <strong className="intro">Scientific Name</strong>
            <span className="ans">: Lama glama</span>
          </p>
          <p>
            <strong className="intro">Type</strong>
            <span className="ans">: Mammal</span>
          </p>
          <p>
            <strong className="intro">Diet</strong>
            <span className="ans">: Herbivore</span>
          </p>
        </div>

        <div className="info-llama">
        <section className="about">
          <Title title="About the Llama" />
          <p>
            <span>
              The llama is a South American relative of the camel, though the
              llama does not have a hump.
            </span>
          </p>
          </section>
        
        <section className="pack">
          <Title title="Pack Animals" />
          <p>
            <span>
              These sturdy creatures are domestic animals used by the peoples of
              the Andes Mountains. (Their wild relatives are guanacos and
              vicuñas). Native peoples have used llamas as pack animals for
              centuries. Typically, they are saddled with loads of 50 to 75
              pounds. Under such weight they can cover up to 20 miles in a
              single day. Pack trains of llamas, which can include several
              hundred animals, move large amounts of goods over even the very
              rough terrain of the Andes. Llamas are willing pack animals but
              only to a point. An overloaded llama will simply refuse to move.
              These animals often lie down on the ground and they may spit,
              hiss, or even kick at their owners until their burden is lessened.
            </span>
          </p>
          </section>

        <section className="feed">
          <Title title="Feeding" />
          <p>
            <span>
              Llamas graze on grass and, like cows, regurgitate their food and
              chew it as cud. They chomp on such wads for some time before
              swallowing them for complete digestion. Llamas can survive by
              eating many different kinds of plants, and they need little water.
              These attributes make them durable and dependable even in sparse
              mountainous terrain.
            </span>
          </p>
          </section>

        <section className="relation">
          <Title title="Humans" />
          <p>
            <span>
              Llamas contribute much more than transportation to the human
              communities in which they live. Leather is made from their hides,
              and their wool is crafted into ropes, rugs, and fabrics. Llama
              excrement is dried and burned for fuel. Even in death, llamas can
              serve their human owners—some people slaughter them and eat their
              meat.
            </span>
          </p>
          </section>
        </div>
      </section>
    );
  }
}

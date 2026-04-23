import { hero } from "@/content/homepage";

export function Hero() {
  const [first, ...rest] = hero.name.split(" ");
  const last = rest.join(" ");

  return (
    <section className="relative grid grid-cols-12 gap-x-6 gap-y-10 pt-16 pb-10 md:pt-24">
      {/* Folio rail */}
      <div className="col-span-12 flex items-center justify-between md:col-span-12">
        <span className="eyebrow animate-fade text-foreground">
          Portfolio · 2026
        </span>
        <span className="eyebrow animate-fade text-muted-foreground">
          Bandung · IDN
        </span>
      </div>

      <hr className="col-span-12 rule animate-rule delay-100" />

      {/* Name — oversized italic serif */}
      <div className="col-span-12 md:col-span-10 md:col-start-2">
        <h1 className="display-serif text-[clamp(4rem,16vw,13rem)] text-foreground">
          <span className="block animate-rise">{first}</span>
          <span className="block pl-[8%] animate-rise delay-200">
            <span className="text-accent">/</span>
            {last}
            <span className="text-accent">/</span>
          </span>
        </h1>
      </div>

      {/* Subtitle + overview row */}
      <div className="col-span-12 grid grid-cols-12 gap-x-6 gap-y-8">
        <div className="col-span-12 md:col-span-4 md:col-start-1">
          <p className="eyebrow animate-rise delay-300 text-foreground">
            {hero.title}
          </p>
          <p className="meta animate-rise delay-300 mt-2 text-muted-foreground">
            Practicing since 2017
          </p>
        </div>

        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <p className="animate-rise delay-400 font-serif text-xl leading-normal text-foreground md:text-[1.6rem] md:leading-[1.35]">
            {hero.overview}
          </p>
        </div>
      </div>

      <hr className="col-span-12 rule animate-rule delay-500" />

      {/* Primary stack as editorial tag row */}
      <div className="col-span-12 grid grid-cols-12 items-baseline gap-x-6">
        <span className="eyebrow col-span-12 md:col-span-2 text-muted-foreground animate-fade delay-500">
          Primary stack
        </span>
        <ul className="col-span-12 md:col-span-10 flex flex-wrap items-baseline gap-x-5 gap-y-2 animate-rise delay-600">
          {hero.primarySkills.map((skill, i) => (
            <li
              key={skill}
              className="meta flex items-baseline gap-5 text-foreground"
            >
              {i > 0 && <span className="text-accent">/</span>}
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

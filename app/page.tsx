'use client';

import { Scrollyteller, Folio } from '@nomic-ai/atlas-stories-react';
import '@nomic-ai/atlas-stories-react/dist/style.css';
import { colors } from './colors'; // Updated import for colors
import RebusIcon from './RebusIcon'; // Importing the new RebusIcon component

export default function Page() {
  console.log({ Scrollyteller });

  return (
    <div
      className="main"
      style={{
        margin: '50px',
        maxWidth: 'calc(100vw - 100px)',
        height: '100vh',
      }}
    >
      <h1>Solutions Universe</h1>
      <Scrollyteller map="christopherbfrance/articles-map-20241230-222047/map/2e4eca5c-e55c-4c11-9b31-c600c7b2b5e5">
        <Folio zoom={{ x: [-50, 50], y: [-50, 50] }}>
          This is a map of all of the articles accepted into the Story Tracker database from early 2022 to late 2024. Each region is a &ldquo;galaxy&rdquo; that roughly clusters articles by topic.
          <small>For the 2024 Story Tracker map, we used the <span className="font-mono"><a href="https://arxiv.org/abs/2402.01613">Nomic Embed 1.5</a></span> model to process embeddings.</small>
        </Folio>
        <Folio hash="8hqa">
          During our 2024 work on insight analysis, we focused on the environment and agriculture topic, which appears here as a lower region in the universe.
        </Folio>
        <Folio hash="jQ1e">
          If we zoom in we can see subcategories of the environment and agriculture topic.
        </Folio>
        <Folio hash="LKEa">
          <span style={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px' }}>
            The intersection of <RebusIcon label="environmental" color={colors.environmental.base} type="environmental" /> and
            <RebusIcon label="agriculture" color={colors.agriculture.base} type="agriculture" /> topics with
            <RebusIcon label="urban planning" color={colors.urbanPlanning.base} type="urbanPlanning" />
          </span>
        </Folio>
        <Folio hash="tPlB">
          Urban farming
        </Folio>
        <Folio hash="gGYs">
          Waste management and Recycling
        </Folio>
        <Folio hash="hax7">
          Wildfires
        </Folio>
        <Folio hash="jzFT">
          The galaxy of health articles in the Solutions Journalism Network.
        </Folio>
        <Folio hash="5Ndc">
          Urban planning
        </Folio>
        <Folio hash="hsrI">
          Solar energy
        </Folio>
        <Folio hash="VH8I">
          Cooking stoves
        </Folio>
        <Folio hash="45gF">
          COVID-19
        </Folio>
        <Folio hash="KLRd">
          COVID-19 Korean outbreak
        </Folio>
        <Folio hash="RPcE">
          COVID-19 PPE Stories
        </Folio>
      </Scrollyteller>
    </div>
  );
}

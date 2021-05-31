import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { useState } from 'react';
import { BasicPage } from '../../src/basic_page';

import useFetch from 'use-http';

type ButtonAction = {
  // the button will be displayed as secondary and have a little external icon to the right
  // no matter which color is set
  kind: "link",
  link: string,
} | {
  kind: "secret_message",
  panel_id: string,
  // an id of a Panel to display. these things are made as "panels" and then you
  // can add panels and edit panels and stuff
} | {
  kind: "toggle_role",
  role_id: string,
} | {
  kind: "unset",
};

type Button = {
  kind: "button",
  color: "primary" | "secondary" | "accept" | "deny",
  text: string,
  emoji?: {id: string, name: string, animated: boolean}, // should support any emoji
  action: ButtonAction,
};
type Action = Button;// | {kind: "unsupported"};
type ActionRow = {kind: "action-row", actions: Action[]};// | {kind: "unsupported"};

type Panel = {
  message: string, // TODO display this with that discord markdown thing
  buttons: ActionRow[],
};

// editor will look like this
// Button
// there's a little color icon on the top left for selecting the color
// there's a click icon on the bottom right to select the action
// there's a textarea in the middle to type the button name
// there's a box for an emoji
// there's a preview toggle that hides all these things and just previews

type Mut<T> = [T, (a: T) => void];

function ActionEditor({action: [action, setAction]}: {action: Mut<Action>}): JSX.Element {
  return <span>
    Action
  </span>;
}

function ActionRowEditor({ar: [actionRow, setActionRow]}: {ar: Mut<ActionRow>}): JSX.Element {
  return <div>
    {/* {actionRow.actions.map((action, i) => <ActionEditor key={i} ar={[action, (na) => actionRow(actionRow.map((act, ii) => i === ii ? na : act))]} />)}
    <button onClick={() => setActionRow(...actionRow, {kind: "button", color: "primary", text: "Button", action: {kind: "unset"}})}>+ Itm</button> */}
  </div>;
}

function ActionsEditor({actions: [actions, setActions]}: {actions: Mut<ActionRow[]>}): JSX.Element {
  return <div>
    {actions.map((ar, i) => <ActionRowEditor key={i} ar={[ar, (na) => setActions(actions.map((act, ii) => i === ii ? na : act))]} />)}
    <button onClick={() => setActions([...actions, {kind: "action-row", actions: []}])}>+ Row</button>
  </div>;
}

function PanelEditor({panel: [panel, setPanel]}: {panel: Mut<Panel>}): JSX.Element {
  return <div>
    <textarea class="resize-y w-full h-40" value={panel.message} onChange={e => setPanel({...panel, message: e.currentTarget.value})} />
    <ActionsEditor actions={[panel.buttons, (nb) => setPanel({...panel, buttons: nb})]} />
  </div>;
}

export default function Home(): JSX.Element {
  const [panel, setPanel] = useState<Panel>({message: "", buttons: []});
  return <BasicPage
    title="Panel Editor"
    meta_desc="Create button panels for Discord"
    parent={{name: "Tools", href: "/tools"}}
    filename="/pages/tools/panel_editor.tsx"
  >
    <PanelEditor panel={[panel, setPanel]} />
  </BasicPage>;
}

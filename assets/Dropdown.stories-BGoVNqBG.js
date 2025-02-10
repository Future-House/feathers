import{j as t}from"./index-DYsiV-Pg.js";import{r as m}from"./index-WgBwkUTT.js";import{D as i,a as u,B as x}from"./Crows-D45H40su.js";import{F as D}from"./Footer-_SxdGCa5.js";import"./index-CyqBJf1o.js";const j={title:"Future House/Dropdown",component:i},h=n=>{const[c,s]=m.useState(n.label),d=e=>{s(e)};return t.jsxs(D,{children:[t.jsx(i,{label:c,children:n.options.map((e,l)=>t.jsx(u,{onClick:()=>d(e),children:e},`${e}-${l}`))}),t.jsx(x,{mg:4,onClick:()=>s(n.options[0]),children:"reset"})]})},o=h.bind({});o.args={options:["Option 1","Option 2","Option 3"],label:"No Selected Value"};var r,p,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState(args.label);
  const handleChange = option => {
    setSelected(option);
  };
  return <FutureHouseApp>
            <Dropdown label={selected}>
                {args.options.map((item, index) => <DropdownItem key={\`\${item}-\${index}\`} onClick={() => handleChange(item)}>
                        {item}
                    </DropdownItem>)}
            </Dropdown>
            <Button mg={4} onClick={() => setSelected(args.options[0])}>
                reset
            </Button>
        </FutureHouseApp>;
}`,...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const B=["BasicDropdown"];export{o as BasicDropdown,B as __namedExportsOrder,j as default};

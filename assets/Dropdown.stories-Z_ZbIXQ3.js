import{j as t,F as m}from"./Footer-D7HPri9z.js";import{r as u}from"./index-BBkUAzwr.js";import{D as i,a as x,B as D}from"./Crows-CqzI3xVJ.js";import"./index-BfZ0jBbx.js";import"./index-YMbfICiA.js";import"./extends-CF3RwP-h.js";import"./assertThisInitialized-C1KLUksq.js";const k={title:"Future House/Dropdown",component:i},h=n=>{const[c,s]=u.useState(n.label),d=e=>{s(e)};return t.jsxs(m,{children:[t.jsx(i,{label:c,children:n.options.map((e,l)=>t.jsx(x,{onClick:()=>d(e),children:e},`${e}-${l}`))}),t.jsx(D,{mg:4,onClick:()=>s(n.options[0]),children:"reset"})]})},o=h.bind({});o.args={options:["Option 1","Option 2","Option 3"],label:"No Selected Value"};var r,p,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
}`,...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const F=["BasicDropdown"];export{o as BasicDropdown,F as __namedExportsOrder,k as default};

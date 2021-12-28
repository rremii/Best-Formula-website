const GET_MATH_DATA = "getMathData";
const GET_PHISICS_DATA = "getPhisicsData";

let initialState = {
    phisicData: [
        /////////////////////////
        {
            id: "1",
            eng: {
                name: "Kinematics",
                formulas: [
                    '$$ X={x_{0} \\pm v_{0}t \\pm {\\vec at^2 \\over 2}} $$',
                    '$$ u={u_{0} + {at^2 \\over 2}} $$',
                    '$$ \\vec v^2 - \\vec v_{0}^2 = 2a\\vec s $$',
                    '$$ \\lt v \\gt={{\\sum{s}} \\over \\sum{t}} $$',
                    '$$ u={{2\\pi R} \\over T} $$',
                    '$$ T={1 \\over \\nu} $$',
                    '$$ w={{2\\pi \\over T}} $$',
                    '$$ a={v^2 \\over R}={w^2R}={wv} $$',
                ],
                discription: [
                    '\\(X=S\\) - path [ \\( m \\) ]',
                    '\\(x_{0}\\) - initial path [ \\( m \\) ]',
                    '\\(v_{0}\\) - initial speed [ \\( m/с \\) ]',
                    '\\(t\\) - time [ \\( m \\) ]',
                    '\\(a\\) - acceleration [ \\( m/с^2 \\) ]',
                    '\\(v\\) - speed [ \\( m/c \\) ]',
                    '\\(T\\) - period [ \\( c \\) ]',
                    '\\(w\\) - cyclic frequency [ \\( rad/c \\) ]',
                    '\\(R\\) - radius [ \\( m \\) ]',

                ],
            },
            rus: {
                name: "Кинематика",
                formulas: [
                    '$$ X={x_{0} \\pm v_{0}t \\pm {\\vec at^2 \\over 2}} $$',
                    '$$ u={u_{0} + {at^2 \\over 2}} $$',
                    '$$ \\vec v^2 - \\vec v_{0}^2 = 2a\\vec s $$',
                    '$$ \\lt v \\gt={{\\sum{s}} \\over \\sum{t}} $$',
                    '$$ u={{2\\pi R} \\over T} $$',
                    '$$ T={1 \\over \\nu} $$',
                    '$$ w={{2\\pi \\over T}} $$',
                    '$$ a={v^2 \\over R}={w^2R}={wv} $$',
                ],
                discription: [
                    '\\(X=S\\) - путь [ \\( м \\) ]',
                    '\\(x_{0}\\) - начальный путь [ \\( м \\) ]',
                    '\\(v_{0}\\) - начальная скорость [ \\( м/с \\) ]',
                    '\\(t\\) - время [ \\( м \\) ]',
                    '\\(a\\) - ускорение [ \\( м/с^2 \\) ]',
                    '\\(v\\) - скорость [ \\( м/c \\) ]',
                    '\\(T\\) - периуд [ \\( c \\) ]',
                    '\\(w\\) - циклическая частота [ \\( рад/c \\) ]',
                    '\\(R\\) - радиус [ \\( м \\) ]',
                ],
            },
        },
        /////////////////////
        {
            id: "2",
            eng: {
                name: "Dynamics",
                formulas: [
                    '$$ F_{g}=m \\vec{g} $$',
                    '$$ F_{e}=-kx $$',
                    '$$ F_{f}=\\mu N $$',
                    '$$ \\vec F=m \\vec a $$',
                    '$$ F_{a}=G{{m_{1} m_{2}} \\over r^2} $$',
                    '$$ P=m(g \\pm a) $$',
                    '$$ p_{i}=m \\vec v $$',
                    '$$ p_{i1}+p_{i2}...+p_{in}=const $$',
                ],
                discription: [
                    '\\(F_{g}\\) - gravity [ \\( n \\) ]',
                    '\\(F_{e}\\) - elastic force [ \\( n \\) ]',
                    '\\(F_{f}\\) - friction force [ \\( n \\) ]',
                    '\\(\\vec F\\) - resultant , Newton\'s second law [ \\( n \\) ]',
                    '\\(F_{a}\\) - attraction force [ \\( n \\) ]',
                    '\\(P\\) - weight [ \\( n \\)]',
                    '\\(p_{i}\\) - impulse [ \\( kg  m/c \\) ]',
                ],
            },
            rus: {
                name: "Динамика",
                formulas: [
                    '$$ F_{т}=m \\vec{g} $$',
                    '$$ F_{упр}=-kx $$',
                    '$$ F_{тр}=\\mu N $$',
                    '$$ \\vec F=m \\vec a $$',
                    '$$ F=G{{m_{1} m_{2}} \\over r^2} $$',
                    '$$ P=m(g \\pm a) $$',
                    '$$ p=m \\vec v $$',
                    '$$ p_{1}+p_{2}...+p_{n}=const $$',
                ],
                discription: [
                    '\\(F_{т}\\) - сила тяжести [ \\( Н \\) ]',
                    '\\(F_{упр}\\) - сила упругости [ \\( Н \\) ]',
                    '\\(F_{тр}\\) - сила трения [ \\( Н \\) ]',
                    '\\(\\vec F\\) - результирующая , второй закон Ньютона [ \\( Н \\) ]',
                    '\\(F_{п}\\) - сила притяжения [ \\( Н \\) ]',
                    '\\(P\\) - вес [ \\( n \\) ]',
                    '\\(p_{и}\\) - импульс [ \\( кг  м/c \\) ]',
                ],
            },
        },
        ////////////////////////
        {
            id: "3",
            eng: {
                name: "Thermodynamics",
                formulas: [
                    '$$1. Q=cm\\Delta t $$',
                    '$$3. Q=λm $$',
                    '$$2. Q=qm$$',
                    '$$4. Q=rm$$',
                    '$$ Q=\\sum Q$$',
                    '$$ η= {Q_{useful} \\over Q_{spent}}$$',
                    '$$ η= {A_{useful} \\over Q_{spent}}$$',
                    '$$ η= {Q_{heater}-Q_{fridge} \\over Q_{heater}}$$',
                ],
                discription: [
                    '\\( m \\) - weight [ \\( kg \\) ]',
                    '\\( Q \\) - heat [ \\( Joule \\) ]',
                    '1 - heating: \\(c\\) -specific heat capacity [ \\( Joule \\) ]',
                    '2 - melting: \\(λ\\) -specific heat of melting [ \\( Joule \\) ]',
                    '3 - combustion: \\(q\\) -specific heat of combustion [ \\( Joule \\) ]',
                    '4 - vaporization: \\(r\\) -specific heat of vaporization [ \\( Joule \\) ]',
                    '\\( η \\) - efficiency [ % ]',

                ],
            },
            rus: {
                name: "Термодинамика",
                formulas: [
                    '$$1. Q=cm\\Delta t $$',
                    '$$2. Q=qm$$',
                    '$$3. Q=λm $$',
                    '$$4. Q=rm$$',
                    '$$ Q=\\sum Q$$',
                    '$$ η= {Q_{пол} \\over Q_{зат}}$$',
                    '$$ η= {A_{пол} \\over Q_{зат}}$$',
                    '$$ η= {Q_{наг}-Q_{хол} \\over Q_{наг}}$$',

                ],
                discription: [
                    '\\( m \\) - масса [ \\( кг \\) ]',
                    '\\( Q \\) - теплота [ \\( Дж \\) ]',
                    '1 - нагревание: \\(c\\) -удельная теплоемкость [ \\( Дж \\) ]',
                    '2 - плавление: \\(λ\\) -удельная теплота плавления [ \\( Дж \\) ]',
                    '3 - горение: \\(q\\) -удельная теплота горения [ \\( Дж \\) ]',
                    '4 - парообразование: \\(r\\) -удельная теплота парообразования [ \\( Дж \\) ]',
                    '\\( η \\) - кпд [ % ]',
                ],
            },
        },
        ////////////////////////
        {
            id: "4",
            eng: {
                name: "Mechanical work",
                formulas: [
                    '$$ A=FScos\\alpha $$',
                    '$$ P={A\\over \\Delta t}={F \\lt v \\gt} $$',
                    '$$ W_{k}={{mv^2}\\over 2} $$',
                    '$$ W_{p}=mgh $$',
                    '$$ W_{p}={{kx^2}\\over 2} $$',
                ],
                discription: [
                    '\\( A \\) - work [ \\( Joule \\) ]',
                    '\\( F \\) - the power spent on doing the job [ \\( n \\) ]',
                    '\\( S \\) - path [ \\( m \\) ]',
                    '\\( m \\) - weight [ \\( kg \\) ]',
                    '\\( v \\) - speed [ \\( m/c \\) ]',
                    '\\( h \\) - height [ \\( m \\) ]',
                    '\\( k \\) - coefficient of stretching [ \\( N/m=kg/c^2 \\) ]',
                    '\\( x \\) - length stretching [ \\( m \\) ]',
                    '\\( W_{p} \\) - potential energy [ \\( Joule \\) ]',
                    '\\( W_{k} \\) - kinetic energy [ \\( Joule \\) ]',

                ],
            },
            rus: {
                name: "Механическая работа",
                formulas: [
                    '$$ A=FScos\\alpha $$',
                    '$$ P={A\\over \\Delta t}={F \\lt v \\gt} $$',
                    '$$ W_{к}={{mv^2}\\over 2} $$',
                    '$$ W_{п}=mgh $$',
                    '$$ W_{п}={{kx^2}\\over 2} $$',
                ],
                discription: [
                    '\\( A \\) - работа [ \\( Дж \\) ]',
                    '\\( F \\) - сила затраченая на совершение работы [ \\( Н \\) ]',
                    '\\( S \\) - путь [ \\( м \\) ]',
                    '\\( m \\) - масса [ \\( кг \\) ]',
                    '\\( v \\) - скорость [ \\( м/c \\) ]',
                    '\\( h \\) - высота [ \\( м \\) ]',
                    '\\( k \\) - коэфициент растяжения [ \\( Н/м=кг/c^2 \\) ]',
                    '\\( x \\) - длинна растяжения [ \\( м \\) ]',
                    '\\( W_{п} \\) - потонциальная энергия [ \\( Дж \\) ]',
                    '\\( W_{к} \\) - кинетическая энергия [ \\( Дж \\) ]',

                ],
            },
        },
        /////////////////////
        {
            id: "5",
            eng: {
                name: "MKT",
                formulas: [
                    '$$ p={1\\over 3}m_{0}nv^2 $$',
                    '$$ p={2\\over 3}m_{0}n \\lt E_{k} \\gt $$',
                    '$$ p={1\\over 3} \\rho \\lt v^2 \\gt $$',
                    '$$ p=nkT $$',
                    '$$ PV={m \\over M}RT $$',
                    '$$ {{PV} \\over T}=const $$',
                    '$$ {{P_{1}V_{1}}\\over T_{1}} = {{P_{2}V_{2}}\\over T_{2}}  $$',
                    '$$ \\Delta U={3 \\over 2}{m\\over M}{R\\Delta T}  $$',
                    '$$ \\Delta U={3 \\over 2}{\\nu R\\Delta T}  $$',
                    '$$ \\Delta U={3 \\over 2}{\\rho \\Delta V}  $$',
                    '$$ \\Delta U=A+Q  $$',
                ],
                discription: [
                    '\\( p = P \\) - pressure [ \\( Pascal \\) ]',
                    '\\( n \\) - concentration [ \\( kg/m^3 \\) ]',
                    '\\( m_{0} \\) - mass of one molecule [ \\( kg \\) ]',
                    '\\( v \\) - speed [ \\( m/c \\) ]',
                    '\\( E_{k} \\) - kinetic energy [ \\( Joule \\) ]',
                    '\\( \\rho \\) - density [ \\( kg/m^3 \\) ]',
                    '\\( k \\) - boltzmann constant [  2,07 x \\(10^{-21}  Joule \\) ]',
                    '\\( T \\) - temperature [ \\( K \\) ]',
                    '\\( R \\) - gas constant [ \\( 8.31 \\) ]',
                    '\\( V \\) - volume [ \\( m^3 \\) ]',
                    '\\( U \\) - internal energy [ \\( Joule \\) ]',
                    '\\( m \\) - weight [ \\( kg \\) ]',
                    '\\( M \\) - molar mass [ \\( kg/mole \\) ]',
                    '\\( \\nu  \\) - amount of substance [ \\( mole \\) ]',


                ],
            },
            rus: {
                name: "МКТ",
                formulas: [
                    '$$ p={1\\over 3}m_{0}nv^2 $$',
                    '$$ p={2\\over 3}m_{0}n \\lt E_{к} \\gt $$',
                    '$$ p={1\\over 3} \\rho \\lt v^2 \\gt $$',
                    '$$ p=nkT $$',
                    '$$ PV={m \\over M}RT $$',
                    '$$ {{PV} \\over T}=const $$',
                    '$$ {{P_{1}V_{1}}\\over T_{1}} = {{P_{2}V_{2}}\\over T_{2}}  $$',
                    '$$ \\Delta U={3 \\over 2}{m\\over M}{R\\Delta T}  $$',
                    '$$ \\Delta U={3 \\over 2}{\\nu R\\Delta T}  $$',
                    '$$ \\Delta U={3 \\over 2}{\\rho \\Delta V}  $$',
                    '$$ \\Delta U=A+Q  $$',
                ],
                discription: [
                    '\\( p = P \\) - давление [ \\( Па \\) ]',
                    '\\( n \\) - концентрация [ \\( кг/м^3 \\) ]',
                    '\\( m_{0} \\) - масса одной малекулы [ \\( кг \\) ]',
                    '\\( v \\) - скорость [ \\( м/c \\) ]',
                    '\\( E_{к} \\) - кинетическая энергия [ \\( Дж \\) ]',
                    '\\( \\rho \\) - плотность [ \\( кг/м^3 \\) ]',
                    '\\( k \\) - постоянная Больцмана [  2,07 x \\(10^{-21}  Дж \\) ]',
                    '\\( T \\) - температура [ \\( К \\) ]',
                    '\\( R \\) - газовая постоянная [ \\( 8.31 \\) ]',
                    '\\( V \\) - обьем [ \\( м^3 \\) ]',
                    '\\( U \\) - внутренняя энергия газа [ \\( Дж \\) ]',
                    '\\( m \\) - масса [ \\( кг \\) ]',
                    '\\( M \\) - молярная масса [ \\( кг/моль \\) ]',
                    '\\( \\nu  \\) - кол. вешества [ \\( моли \\) ]',
                ],
            },
        },
        ///////////////////////
        {
            id: "6",
            eng: {
                name: "Electrostatics",
                formulas: [
                    '$$ q_{1}+q_{2}+...q_{n}=const $$',
                    '$$ F_{k}=k{{q_{1}q_{2}}\\over  εr^2} $$',
                    '$$ \\vec E={\\vec F \\over q} $$',
                    '$$ \\vec E=k{q \\over εr^2} $$',
                    '$$ \\vec E= \\sum \\vec E $$',
                    '$$ φ={W_{p}\\over q} $$',
                    '$$ φ={k{q \\over εr}} $$',
                    '$$ φ= \\sum φ $$',
                    '$$ U=φ_{1}-φ_{2}={A_{1,2}\\over q} $$',
                    '$$ C={{ε_{0}εS}\\over d} $$',

                ],
                discription: [
                    '\\( q \\) - charge [ \\( Coulomb \\) ]',
                    '\\( F_{c} \\) - Coulomb force [ \\( N \\) ]',
                    '\\( k \\) - the proportionality coefficient [  9x\\(10^9 Nm^2/Coulomb^2\\) ]',
                    '\\( ε \\) - dielectric constant [ \\( m^2 \\) ]',
                    '\\( E \\) - tension [ \\( V/m=N/Cl \\) ]',
                    '\\( φ \\) - potential [ \\( V \\) ]',
                    '\\( W_{p} \\) - potential energy [ \\( Joule \\) ]',
                    '\\( U \\) - voltage [ \\( V \\) ]',
                    '\\( A_{1,2} \\) - work on moving the charge [ \\( Joule \\) ]',
                    '\\( C \\) - electrical capacity capacitors [ \\( F \\) ]',
                    '\\( d \\) - distance between plates [ \\( m \\) ]',


                ],
            },
            rus: {
                name: "Электростатика",
                formulas: [
                    '$$ q_{1}+q_{2}+...q_{n}=const $$',
                    '$$ F=k{{q_{1}q_{2}}\\over  εr^2} $$',
                    '$$ \\vec E={\\vec F \\over q} $$',
                    '$$ \\vec E=k{q \\over εr^2} $$',
                    '$$ \\vec E= \\sum \\vec E $$',
                    '$$ φ={W_{п}\\over q} $$',
                    '$$ φ={k{q \\over εr}} $$',
                    '$$ φ= \\sum φ $$',
                    '$$ U=φ_{1}-φ_{2}={A_{1,2}\\over q} $$',
                    '$$ C={{ε_{0}εS}\\over d} $$',
                ],
                discription: [
                    '\\( q \\) - заряд [ \\( Кл \\) ]',
                    '\\( F_{к} \\) - Кулоновская сила [ \\( Н \\) ]',
                    '\\( k \\) - коэфициент пропарциональности [  9x\\(10^9 Н м^2/Кл^2\\) ]',
                    '\\( ε \\) - электропроницаемость среды [ \\( м^2 \\) ]',
                    '\\( E \\) - напряженность [ \\( В/м=Н/Кл \\) ]',
                    '\\( φ \\) - потенциал [ \\( В \\) ]',
                    '\\( W_{п} \\) - потенциальная энергия [ \\( Дж \\) ]',
                    '\\( U \\) - напряжение [ \\( В \\) ]',
                    '\\( A_{1,2} \\) - работа по перемещению заряда [ \\( Дж \\) ]',
                    '\\( C \\) - электроемкость конденсатора [ \\( Фт \\) ]',
                    '\\( d \\) - растояние между пластинами коонденсатора [ \\( м \\) ]',
                ],
            },
        },
        ////////////////////////
        ///////////////////////
        {
            id: "7",
            eng: {
                name: "Direct current",
                formulas: [
                    '$$ I={q \\over \\Delta t} $$',
                    '$$ I={U \\over R} $$',
                    '$$ U={A \\over q} $$',
                    '$$ R=\\rho{l \\over S} $$',
                    '$$ I={ε \\over r+R} $$',
                    '$$ I_{s.c.}={ε \\over r} $$',
                    '$$ ε={A_{non-electric} \\over q} $$',
                    '$$ A={Uq}={UI_{0}t}$$',
                    '$$ A={U^2 \\over R}\\Delta t=P\\Delta t=Q  $$',
                    '$$ P=I^2R={{U^2}\\over R}=UI $$',
                    '$$ η={U \\over ε}={R \\over R+r} $$',
                ],
                discription: [
                    '\\( I \\) - amperage [ \\( A \\) ]',
                    '\\( q \\) - charge [ \\( C \\) ]',
                    '\\( t \\) - time [ \\( c \\) ]',
                    '\\( U \\) - voltage [ \\( V \\) ]',
                    '\\( R \\) - resistance [ \\( Om \\) ]',
                    '\\( A \\) - work [ \\( Joule \\) ]',
                    '\\( \\rho \\) - density [ \\( kg/m^3 \\) ]',
                    '\\( l \\) - length [ \\( m \\) ]',
                    '\\( S \\) - cross-sectional area [ \\( m^2 \\) ]',
                    '\\( ε \\) - electromotive force [ \\( V \\) ]',
                    '\\( P \\) - power [ \\( W \\) ]',
                    '\\( Q \\) - warmth [ \\( Joule \\) ]',
                    '\\( r \\) - current source resistance [ \\( Om \\) ]',
                    '\\( η \\) - efficiency [ % ]',

                ],
            },
            rus: {
                name: "Постоянный ток",
                formulas: [
                    '$$ I={q \\over \\Delta t} $$',
                    '$$ I={U \\over R} $$',
                    '$$ U={A \\over q} $$',
                    '$$ R=\\rho{l \\over S} $$',
                    '$$ I={ε \\over r+R} $$',
                    '$$ I_{к.з.}={ε \\over r} $$',
                    '$$ ε={A_{сторонних} \\over q} $$',
                    '$$ A={Uq}={UI_{0}t}$$',
                    '$$ A={U^2 \\over R}\\Delta t=P\\Delta t=Q  $$',
                    '$$ P=I^2R={{U^2}\\over R}=UI $$',
                    '$$ η={U \\over ε}={R \\over R+r} $$',
                ],
                discription: [
                    '\\( I \\) - сила тока [ \\( А \\) ]',
                    '\\( q \\) - заряд [ \\( Кл \\) ]',
                    '\\( t \\) - время [ \\( с \\) ]',
                    '\\( U \\) - напряжение [ \\( В \\) ]',
                    '\\( R \\) - сопратевление [ \\( Ом \\) ]',
                    '\\( A \\) - работа [ \\( Дж \\) ]',
                    '\\( \\rho \\) - плотность [ \\( кг/м^3 \\) ]',
                    '\\( l \\) - длинна [ \\( м \\) ]',
                    '\\( S \\) - площаль поперечного сечения [ \\( м^2 \\) ]',
                    '\\( ε \\) - ЭДС [ \\( В \\) ]',
                    '\\( P \\) - мощность [ \\( Ват \\) ]',
                    '\\( Q \\) - теплота [ \\( Дж \\) ]',
                    '\\( r \\) - сопративление источника тока [ \\( Ом \\) ]',
                    '\\( η \\) - кпд [ % ]',
                ],
            },
        },
        ////////////////////////
        {
            id: "8",
            eng: {
                name: "Magnetism",
                formulas: [

                    "$$F_{max} = BILsinα$$",
                    '$$F = Bqv$$',
                    '$$Ф = BScosβ$$',
                    '$$Bqv={mv^2\\over R}$$',
                    '$$ ε_{ind}=-{\\Delta Ф\\over \\Delta t} $$',
                    '$$ ε_{ind}=BLvsinα $$',
                    '$$ Ф=LI $$',
                    "$$ W={LI^2 \\over 2}={Ф^2 \\over 2L}={ФI \\over 2} $$",
                ],
                discription: [
                    '\\( F_{max} \\) - ampere power [ \\( N \\) ]',
                    "\\(B\\) = induction [ \\( Tl \\) ]",
                    "\\(I\\) = amperage [ \\( A \\) ]",
                    "\\(L\\) = lenght [ \\( m \\) ]",
                    "\\(q\\) = charge [ \\( Cl \\) ]",
                    "\\(v\\) = speed [ \\( m/c \\) ]",
                    "α = angle between \\(B\\) and \\(I\\)",
                    "β = angle between \\(B\\) and normal",
                    "γ = angle between \\(B\\) and \\(v\\)",
                    '\\( ε_{ind} \\) - electromotive force of induction [ \\( V \\) ]',
                    '\\( Ф \\) - magnetic flux [ \\( Wb \\) ]',
                    '\\( t \\) - time [ \\( c \\) ]',
                    '\\( L \\) - inductance [ \\( Henry \\) ]',
                ],
            },
            rus: {
                name: "Магнетизм",
                formulas: [
                    "$$F_{max} = BILsinα$$",
                    '$$F = Bqv$$',
                    '$$Ф = BScosβ$$',
                    '$$Bqv={mv^2\\over R}$$',
                    '$$ ε_{ind}=-{\\Delta Ф\\over \\Delta T} $$',
                    '$$ ε_{ind}=BLvsinα $$',
                    '$$ Ф=LI $$',
                    "$$ W={LI^2 \\over 2}={Ф^2 \\over 2L}={ФI \\over 2} $$",
                ],
                discription: [
                    '\\( F_{max} \\) - сила Ампера [ \\( Н \\) ]',
                    "\\(B\\) = индукция [ \\( Тл \\) ]",
                    "\\(I\\) = сила тока [ \\( A \\) ]",
                    "\\(L\\) = длинна [ \\( м \\) ]",
                    "\\(q\\) = заряд [ \\( Кл \\) ]",
                    "\\(v\\) = скорость [ \\( м/c \\) ]",
                    "α = угол между \\(B\\) и \\(I\\)",
                    "β = угол между \\(B\\) и нормалью",
                    "γ = угол между \\(B\\) и \\(v\\)",
                    '\\( ε_{ind} \\) - ЭДС индукции [ \\( В \\) ]',
                    '\\( Ф \\) - магнитный поток [ \\( Вб \\) ]',
                    '\\( t \\) - время [ \\( c \\) ]',
                    '\\( L \\) - индуктивность [ \\( Г \\) ]',
                ],
            },
        },
    ],
    mathData: [
        {
            id: "1",
            eng: {
                name: "math1",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "матем1",
                formulas: [],
                discription: [],
            },
        },
        {
            id: "2",
            eng: {
                name: "math2",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "матем2",
                formulas: [],
                discription: [],
            },
        },
        {
            id: "3",
            eng: {
                name: "math3",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "матем3",
                formulas: [],
                discription: [],
            },
        },
        {
            id: "4",
            eng: {
                name: "math4",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "матем4",
                formulas: [],
                discription: [],
            },
        },
        {
            id: "5",
            eng: {
                name: "math5",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "матем5",
                formulas: [],
                discription: [],
            },
        },
        {
            id: "6",
            eng: {
                name: "math6",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "матем6",
                formulas: [],
                discription: [],
            },
        },
        {
            id: "7",
            eng: {
                name: "math7",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "матем7",
                formulas: [],
                discription: [],
            },
        },
    ],
    currentTopic: {},
};

const TopicPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MATH_DATA:
            return {
                ...state,
                currentTopic: {
                    ...state.mathData.filter(({id}) => id === action.id),
                },
            };
        case GET_PHISICS_DATA:
            return {
                ...state,
                currentTopic: {
                    ...state.phisicData.filter(({id}) => id === action.id),
                },
            };

        default:
            return state;
    }
};
export const getMathData = ({id}) => {
    return {type: GET_MATH_DATA, id};
};
export const getPhisicsData = ({id}) => {
    return {type: GET_PHISICS_DATA, id};
};
export default TopicPageReducer;

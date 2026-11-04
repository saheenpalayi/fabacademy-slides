# Computer-Controlled Machining

<p class="subtitle">Fab Academy · Class 03 · Make something big</p>

Note:
This week: CNC router safety, characterising our machine as a group, then designing, milling and assembling something meter-scale.

---

## This week's assignments

<div class="two-col">
<div class="box">

### Group assignment
- Do your lab's safety training
- Test runout, alignment, fixturing, speeds, feeds, materials and toolpaths for your machine

</div>
<div class="box">

### Individual assignment
- Make (design + mill + assemble) something **big** (~meter-scale)
- ⭐ Extra credit: don't use fasteners or glue
- ⭐ Extra credit: include curved surfaces
- ⭐ Extra credit: use three-axis toolpaths

</div>
</div>

---

## How you'll be evaluated

**Learning outcomes**

- Demonstrate 2D design development for CNC milling production
- Describe workflows and operation for large format CNC machining

<p class="small">Full checklist: <a href="https://fabacademy.org/2026/nueval/computer-controlled_machining/">fabacademy.org/2026/nueval → Computer-Controlled Machining</a></p>

--

### Checklist – have you…

<ul class="checklist small">
<li>Linked to the group assignment page</li>
<li>Reflected on your individual page what you learned from your lab's safety training</li>
<li>Documented how you designed your object and made your CAM toolpath</li>
<li>Documented how you milled and assembled your final product – machine setup, fixturing, feeds and speeds</li>
<li>Described problems and how you fixed them</li>
<li>Included your design files and a "hero shot" of your final product</li>
</ul>

--

### How big is "big"?

<div class="three-col">
<div class="box">

**Board**

at least **1200 × 1200 mm** (4' × 4')

</div>
<div class="box">

**Your parts**

nested parts roughly **1 m × 1 m**

</div>
<div class="box">

**Purpose**

big enough to show you can machine **safely**

</div>
</div>

<p class="small">Material doesn't have to be wood – but the lab provides a full-size wood board (8' × 4').</p>

---

## Today's plan

1. Intro & safety
2. The CNC machine – ShopBot & end mills
3. Material – 12 mm & 18 mm plywood
4. CAM – VCarve / Fusion 360
5. Machine setup
6. Group assignment – testing the machine
7. Individual assignment – design thinking <span class="accent">(Mufeed)</span>
8. Extra credits

---

<!-- .slide: data-background-color="#1d1d1b" -->

# <span class="accent">01</span> Intro & Safety

<p class="subtitle" style="color:#ccc">Do your lab's safety training first – no exceptions</p>

--

### What is CNC machining?

- **Subtractive** manufacturing: a spinning cutter removes material
- **CNC** = Computer Numerical Control – the machine follows a toolpath file
- A **CNC router** cuts big sheets: plywood, MDF, foam, plastics
- Workflow: **design → CAM (toolpaths) → machine setup → mill → assemble**

--

### The hazards

<div class="two-col">
<div class="box">

**What can go wrong**
- Splinters, cuts and burns
- Flying chips and broken tools
- Parts coming loose at high speed
- **Fire** – friction from a dull bit or too-slow feed
- Noise and fine dust

</div>
<div class="box">

**Protect yourself**
- Safety glasses + ear protection
- Closed shoes, no loose clothing
- Hair tied back, no jewellery
- Dust mask, dust collection **on**
- Gloves only when handling stock – **never** near a spinning tool

</div>
</div>

--

### Rules while the machine runs

- Know where the **emergency stop** is – before you start
- **Never leave** the machine while it's cutting
- Keep your **hands out** of the work area
- Use your senses: **look, listen, smell** – stop if it sounds or smells wrong
- Not feeling alert today? **Don't operate.** Ask for help when unsure

Note:
Walk students to the E-stop and spindle switch. Demonstrate the stop/pause on the keypad / ShopBot software.

---

<!-- .slide: data-background-color="#1d1d1b" -->

# <span class="accent">02</span> The CNC Machine

<p class="subtitle" style="color:#ccc">ShopBot & end mills</p>

--

### Our machine: ShopBot

<div class="two-col">
<div class="box">

**Parts**
- Gantry moving in **X / Y**, spindle moving in **Z**
- Spindle – holds and spins the end mill
- Bed + **sacrificial layer** (spoilboard)
- Dust collection shoe

</div>
<div class="box">

**Software**
- **ShopBot Control** – runs the machine
- Toolpath files: `.sbp` (ShopBot) or G-code `.g`
- Keypad – jog the axes by hand

</div>
</div>

Note:
Add our machine's working area and spindle max RPM here.

--

### End mills

- **Flat end** – 2D profiles and pockets · **Ball end** – 3D curved surfaces
- **V-bit** – engraving and chamfers
- **Flutes**: fewer flutes = more room for chips (2-flute is common for wood)
- **Up-cut** pulls chips up (clean bottom, rough top) · **Down-cut** pushes down (clean top) · **Compression** = both
- **Center-cutting** tools can plunge straight down

--

### Speeds & feeds

The **chip load** is how much each flute cuts per turn:

<pre><code class="language-text">chip load = feed rate / (RPM × number of flutes)
feed rate = chip load × RPM × number of flutes
</code></pre>

<div class="small">

**Example** – 6 mm, 2-flute flat end mill in plywood:
`0.1 mm × 16,000 RPM × 2 = 3,200 mm/min`

- Too **slow** a feed → rubbing, burning, fire risk 🔥
- Too **fast** → chatter, broken tool, rough edges
- Rules of thumb: depth per pass ≈ **tool diameter**, stepover ≈ **half the diameter**

</div>

Note:
Example values only – use the chip load from the tool manufacturer's chart and confirm with a test cut.

---

<!-- .slide: data-background-color="#1d1d1b" -->

# <span class="accent">03</span> Material

<p class="subtitle" style="color:#ccc">12 mm & 18 mm plywood</p>

--

### Plywood

<div class="two-col">
<div class="box">

**12 mm**
- Lighter, easier to handle
- Small furniture, shelves, boxes

</div>
<div class="box">

**18 mm**
- Strong, stiff
- Chairs, tables, structural parts

</div>
</div>

- **Measure the real thickness** with calipers – it is never exactly 12 or 18 mm
- Thickness varies across the sheet – measure in several places
- Check the sheet is **flat** – a warped sheet ruins press-fits

--

### Why thickness matters

- Your slot width = **measured thickness + clearance**
- Use a **parameter** for thickness in your CAD design
- Then one change updates every joint

<pre class="small"><code class="language-text">thickness = 17.6 mm   (measured)
clearance = 0.2 mm    (from your test cut)
slot      = thickness + clearance = 17.8 mm
</code></pre>

---

<!-- .slide: data-background-color="#1d1d1b" -->

# <span class="accent">04</span> CAM

<p class="subtitle" style="color:#ccc">VCarve / Fusion 360</p>

--

### From design to toolpath

1. **Export** your 2D design – `.dxf` (or `.svg`) with closed vectors
2. **Set up the stock** – sheet size, thickness, origin (X0 Y0 and Z0)
3. **Create toolpaths** – choose tool, depths, feeds & speeds
4. **Simulate** – check it before you cut
5. **Save** the toolpath as `.sbp` for the ShopBot

--

### Setting up the stock

- Job size = your sheet size (e.g. 2440 × 1220 mm)
- Thickness = **measured** thickness
- **Z zero**: top of material _or_ machine bed – match how you'll zero the machine
- **XY origin**: usually a corner of the sheet
- Leave a margin at the edges for screws / clamps

--

### Toolpath types

<div class="three-col">
<div class="box">

**Profile**

cut along a line – **outside** for parts, **inside** for holes

</div>
<div class="box">

**Pocket**

clear an area to a depth

</div>
<div class="box">

**Drill**

holes – e.g. for screws that hold the sheet down

</div>
</div>

<div class="small">

- **Tabs** – small bridges that stop parts moving when they're cut free
- **Dogbones / T-bones** – a round tool can't cut a sharp inside corner, so add corner relief
- **Climb vs conventional** cut direction · **ramp** in instead of plunging

</div>

--

### Dogbones

<pre><code class="language-text">   without dogbone          with dogbone
   ┌──────────            ●──────────
   │   (rounded           │
   │    corner – the      │   tool cuts past the corner,
   │    tab won't fit)    │   so the square part fits
</code></pre>

- Needed on every **inside corner** of a slot
- Size = tool diameter
- Fusion 360: add in the sketch · VCarve: **Fillet tool → dog-bone**

--

### Before you send it

- Run the **simulation** – look for missed areas and wrong depths
- **Cut air** first: run the job with Z raised to check the motion
- Check the **order**: inside cuts and holes first, outside profiles last
- Save with a clear name: `chair_profile_6mm_18mm.sbp`

---

<!-- .slide: data-background-color="#1d1d1b" -->

# <span class="accent">05</span> Machine Setup

--

### 1 · Clean the work area

- **Vacuum** the bed and the sacrificial layer
- Remove old screws, chips and offcuts
- Empty / check the dust collector
- A single chip under the sheet changes your depth

--

### 2 · Install the stock

- Place the sheet **square** to the machine axes
- Fix it down: **screws** into the sacrificial layer, clamps or vacuum
- Put screws where the **toolpath won't go** (you planned this in CAM!)
- Press the sheet flat – check the middle isn't lifting

Note:
Show students where screws go relative to their nested parts. Plastic/brass screws are safer if the tool might hit them.

--

### 3 · Install the end mill

- **Power off / lock** the spindle before touching the tool
- Clean collet and nut – no dust
- Insert the shank deep into the collet (not touching the bottom)
- Tighten with **two wrenches** – firm, not forced
- Check the **runout**: the tool must spin true

--

### 4 · Zero the axes

- **X / Y**: jog to your origin, then set zero (ShopBot: home with **C3**)
- **Z**: use the **Z-zero plate** (ShopBot: **C2**)
  - Clip the ground clamp to the tool, plate under the bit
  - Remove the plate afterwards!
- Zero **again** every time you change the tool

--

### 5 · Cut!

1. Dust collection **on**, safety glasses on
2. Load the `.sbp` file in ShopBot Control
3. Start the spindle, then the job
4. Stay at the machine, hand near the **stop**
5. When done: spindle stops → vacuum → remove the sheet → cut tabs → sand

---

<!-- .slide: data-background-color="#1d1d1b" -->

# <span class="accent">06</span> Group Assignment

<p class="subtitle" style="color:#ccc">Characterise our machine</p>

--

### What to test

<div class="small">

| Test | How |
|---|---|
| **Runout** | Cut a slot – compare slot width to tool diameter |
| **Alignment** | Cut a large square – measure the diagonals, they should match |
| **Fixturing** | Try screws, clamps, vacuum – does the sheet stay flat? |
| **Speeds & feeds** | Cut test lines at different feeds/RPM – check the edge & sound |
| **Materials** | Compare 12 mm vs 18 mm, measure actual thickness |
| **Toolpaths** | Inside / outside / on-line profile, pockets, tabs, dogbones |

</div>

--

### Make a test piece

- One small file that tests **press-fit clearance**: slots at e.g. +0.0, +0.1, +0.2, +0.3 mm
- Include a **dogbone** corner and a **pocket**
- Try the fit – pick the clearance for your big project
- Document everything on the **group page**, and link to it from your own page

---

<!-- .slide: data-background-color="#1d1d1b" -->

# <span class="accent">07</span> Individual Assignment

<p class="subtitle" style="color:#ccc">Design thinking – guest session: Mufeed</p>

--

### What to design?

- Something **useful** you'll actually use: chair, table, shelf, stool, bed, planter…
- Or a part of your **final project**
- Browse: Opendesk, AtFab, WikiHouse – and past Fab Academy students
- Sketch first, then model in CAD with **parameters**

--

### Design within the limits

- Parts must **nest** into roughly **1 m × 1 m**
- Sheet ≥ **1200 × 1200 mm**
- Design for **one thickness** of material
- Think about **assembly**: how do the parts lock together?
- Make a **small-scale prototype** first – cardboard on the laser, or a mini version

---

<!-- .slide: data-background-color="#1d1d1b" -->

# <span class="accent">08</span> Extra Credits

--

### ⭐ Don't use fasteners or glue

- Use **joinery**: the parts hold themselves together
  - Press-fit **slots** (cross-lap)
  - **Finger** joints / box joints
  - **Tusk tenon** with a wedge – knock-down furniture
  - Dovetails, locking keys
- Fit depends on your **clearance test** – too tight splits, too loose wobbles

--

### ⭐ Include curved surfaces

- **Curved profiles** – organic outlines are easy in 2D
- **Kerf bending** – parallel cuts let flat plywood bend
- **Living hinges** – a cut pattern that flexes
- Stacked layers / ribs that form a curved shape

--

### ⭐ Use three-axis toolpaths

In **Fusion 360 → Manufacture**:

1. Model a 3D surface (seat, bowl, relief)
2. **Roughing**: 3D *Adaptive Clearing* with a flat end mill
3. **Finishing**: *Parallel* or *Scallop* with a **ball end** mill, small stepover
4. **Simulate** → post-process for ShopBot (`.sbp`)

<p class="small">3D finishing passes take a long time – try a small area first.</p>

---

## Before next class ✅

<ul class="checklist">
<li>Safety training done + reflected on your page</li>
<li>Group assignment page – linked from your page</li>
<li>Design + CAM documented, with design files</li>
<li>Milling, fixturing, feeds & speeds documented</li>
<li>Problems and fixes described</li>
<li>Hero shot of your big object 📸</li>
</ul>

---

# Questions?

<p class="subtitle"><a href="../">← Back to all classes</a></p>

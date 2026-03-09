# From Manual to Velocity: The Spec-Driven Way (v2)

**Version 2.0** - Enhanced for 100+ audience presentation

## 🎯 Overview

This is an enhanced version of the original presentation, specifically designed for larger audiences (100+ people) with a **25-30 minute total time** (18-20 min talk + 5-10 min Q&A) with a focus on:
- **Minimal slides** with impactful visuals
- **Comprehensive speaker notes** for detailed talks
- **Personal branding** elements (photo, LinkedIn)
- **Interactive opening** to engage the audience
- **Storytelling approach** rather than bullet-point heavy slides
- **Well-paced delivery** with room to breathe

## 🎨 Presentation Style

- **Talk-heavy, slide-minimal**: The slides support your narrative, not replace it
- **Visual storytelling**: Uses emojis, diagrams, and clean layouts
- **Progressive disclosure**: Uses v-clicks for gradual reveal
- **Mermaid diagrams**: Visual representation of the journey/workflow

## 📋 Content Structure

1. **Opening** (Interactive)
   - **Oral poll** with 4 audience questions (not on slides!)
     - Who is a frontender?
     - Who has used backend APIs in frontend?
     - Who has created a BFF?
     - Who knows Swagger/OpenAPI specs?
   - Personal introduction with photo

2. **The Problem**
   - BFF requirement and WSO2 context
   - DTO nightmare visualization
   - Scale of the problem

3. **The Discovery**
   - Finding API client generators
   - Introduction to Orval

4. **The Solution**
   - Configuration simplicity
   - Mutators for authentication
   - Debugging spec quality issues

5. **The Results**
   - Complete BFF automation
   - Frontend extension with React Query
   - The complete cycle

6. **Takeaways & Resources**
   - Key learnings
   - Tools and resources
   - Next steps

7. **Q&A**
   - Thank you slide with contact info

## 🚀 Running the Presentation

### From presentation directory:
```bash
cd presentations/manual-to-velocity-the-spec-driven-way-v2
npm run dev
```

### From root directory:
```bash
npm run dev:presentation-v2
```

### Access:
Open: `http://localhost:3030`

## 🎤 Presenter Tips

1. **Read the speaker notes** - Each slide has detailed guidance and key points
2. **Practice with a timer** - Aim for 18-20 minutes talk (leaves 5-10 min for Q&A)
3. **Take your time** - You have room to breathe, share stories, and elaborate
4. **Use the oral poll** - Ask all 4 questions at the start, let people raise hands, creates engagement
5. **Use presenter mode** - Press `p` to see notes during presentation
6. **Tell the story** - Focus on: Problem (weeks) → Solution (Orval) → Result (seconds)
7. **Share real experiences** - Mention specific challenges you faced
8. **End with energy** - The transformation message is powerful!
9. **Save time for Q&A** - 5-10 minutes is perfect for good interaction

## ⌨️ Keyboard Shortcuts

- `Space` / `→` - Next slide/animation
- `←` - Previous slide
- `p` - Presenter view with notes
- `o` - Overview mode
- `d` - Toggle dark mode
- `f` - Fullscreen
- `g` - Go to slide number

## 📊 Presentation Flow

**Total slides**: ~12 slides (lean but not rushed)
**Total time**: 25-30 minutes
**Talk duration**: 18-20 minutes
**Q&A**: 5-10 minutes

### Timing Breakdown (for 18-20 min talk):
- Opening & Oral Poll: 2 min (4 audience questions)
- Intro (with photo): 1 min
- Problem Statement (Challenge + Journey): 3 min
- DTO Nightmare: 2 min
- Solution Discovery (Orval intro): 2 min
- Implementation (config + mutators): 3 min
- Debugging & Results: 2 min
- Frontend Extension: 3 min
- Complete Cycle: 2 min
- Takeaways & Resources: 2 min
- Closing: 30 sec
- **Q&A: 5-10 min**

**💡 Pro Tip**: You have room to elaborate and share stories! The speaker notes include timing estimates - aim for the longer end (1 min instead of 30 sec per note).

## 🎨 Personal Branding Elements

- Profile photo on introduction slide
- LinkedIn and website links in footer
- Contact information on closing slide
- Gradient text with your brand colors

## 📝 Speaker Notes Highlights

Each slide includes detailed speaker notes covering:
- What to say
- Key points to emphasize
- Transitions to next slide
- Potential audience questions to address

## 🔄 Differences from v1

### v1 (Team presentation):
- More technical detail in slides
- Dense with code and configuration
- Bullet-point heavy
- Less storytelling

### v2 (100+ audience, 20 minutes + Q&A):
- Minimal text per slide
- Story-driven narrative
- Well-paced delivery with room to elaborate
- Interactive opening (poll question)
- Personal branding
- Comprehensive speaker notes with timing
- Streamlined to ~13 slides
- Focuses on storytelling over bullet points

## 🛠️ Customization Notes

Before presenting:
1. ✅ Update profile photo URL in slides.md (currently using keyvanmahmoudi.com/images/profile.jpg)
2. ✅ Verify LinkedIn URL is correct
3. ✅ Test all animations with `v-click`
4. ✅ Practice with presenter mode (`p`)
5. ✅ Review and adjust speaker notes to your style

## 📦 Build for Production

```bash
npm run build
```

Exports to: `dist/`

## 📄 Export to PDF

```bash
npm run export
```

First time? Install Playwright:
```bash
npx playwright install chromium
```

## 🎯 Success Tips for 20-Minute Talk

1. **Rehearse with timer** - Practice until you hit 18-20 minutes consistently
2. **Don't rush** - You have time to elaborate and connect with the audience
3. **Read notes out loud** - They guide you through the narrative
4. **Watch the clock** - Aim for ~1.5 min per slide average
5. **Tell the story** - Problem (weeks) → Solution (Orval) → Result (seconds)
6. **Be conversational** - Share real experiences and challenges
7. **Have PDF backup** - Export just in case
8. **Leave 5-10 min for Q&A** - This is valuable interaction time
9. **Encourage questions** - "I'm happy to answer any questions about Orval, mutators, setup..."

## 📞 Questions?

For questions about the presentation setup or content, refer to the main repo documentation:
- [THEME_GUIDE.md](../../docs/THEME_GUIDE.md)
- [QUICK_REFERENCE.md](../../docs/QUICK_REFERENCE.md)

---

**Good luck with your presentation! 🎉**


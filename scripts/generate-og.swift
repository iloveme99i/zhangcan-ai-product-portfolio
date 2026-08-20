import AppKit

let width = 1200
let height = 630
let image = NSImage(size: NSSize(width: width, height: height))

func color(_ white: CGFloat) -> NSColor {
  NSColor(deviceWhite: white, alpha: 1)
}

func drawText(_ text: String, rect: NSRect, size: CGFloat, weight: NSFont.Weight, color textColor: NSColor, spacing: CGFloat = 0) {
  let paragraph = NSMutableParagraphStyle()
  paragraph.lineBreakMode = .byClipping
  let font = NSFont.systemFont(ofSize: size, weight: weight)
  NSAttributedString(string: text, attributes: [
    .font: font,
    .foregroundColor: textColor,
    .kern: spacing,
    .paragraphStyle: paragraph
  ]).draw(in: rect)
}

image.lockFocus()
NSGraphicsContext.current?.imageInterpolation = .high

color(0.035).setFill()
NSBezierPath(rect: NSRect(x: 0, y: 0, width: width, height: height)).fill()

let paper = NSRect(x: 28, y: 28, width: 822, height: 574)
color(0.965).setFill()
NSBezierPath(rect: paper).fill()

let right = NSRect(x: 850, y: 28, width: 322, height: 574)
color(0.035).setFill()
NSBezierPath(rect: right).fill()

color(0.16).setStroke()
let rules = NSBezierPath()
rules.lineWidth = 1
rules.move(to: NSPoint(x: 28, y: 504))
rules.line(to: NSPoint(x: 1172, y: 504))
rules.move(to: NSPoint(x: 88, y: 28))
rules.line(to: NSPoint(x: 88, y: 602))
rules.move(to: NSPoint(x: 28, y: 136))
rules.line(to: NSPoint(x: 850, y: 136))
rules.stroke()

color(0.95).setFill()
NSBezierPath(rect: NSRect(x: 850, y: 28, width: 322, height: 246)).fill()
color(0.15).setStroke()
for x in stride(from: 862, through: 1164, by: 13) {
  let stripe = NSBezierPath()
  stripe.lineWidth = 1
  stripe.move(to: NSPoint(x: x, y: 28))
  stripe.line(to: NSPoint(x: x, y: 274))
  stripe.stroke()
}

drawText("AI 产品实习作品集", rect: NSRect(x: 116, y: 525, width: 650, height: 42), size: 25, weight: .medium, color: color(0.04), spacing: 1.2)
drawText("张灿", rect: NSRect(x: 112, y: 205, width: 680, height: 245), size: 174, weight: .bold, color: color(0.025), spacing: -8)
drawText("Threadline · 职序 ZHIXU · Signal", rect: NSRect(x: 116, y: 73, width: 690, height: 44), size: 25, weight: .medium, color: color(0.04), spacing: 0.2)

image.unlockFocus()

guard let tiff = image.tiffRepresentation,
      let bitmap = NSBitmapImageRep(data: tiff),
      let png = bitmap.representation(using: .png, properties: [:]) else {
  fatalError("Unable to render OG image")
}

try png.write(to: URL(fileURLWithPath: "public/og.png"))

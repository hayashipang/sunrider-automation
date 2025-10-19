// 簡單的文件存儲系統，用於在開發環境中持久化數據
import fs from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')
const SOLUTIONS_FILE = path.join(DATA_DIR, 'solutions.json')
const IMAGES_FILE = path.join(DATA_DIR, 'images.json')

// 確保數據目錄存在
const ensureDataDir = () => {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

// 讀取解決方案數據
export const loadSolutionsFromFile = () => {
  try {
    ensureDataDir()
    if (fs.existsSync(SOLUTIONS_FILE)) {
      const data = fs.readFileSync(SOLUTIONS_FILE, 'utf8')
      return JSON.parse(data)
    }
  } catch (error) {
    console.error('Error loading solutions from file:', error)
  }
  return []
}

// 保存解決方案數據
export const saveSolutionsToFile = (solutions: any[]) => {
  try {
    ensureDataDir()
    fs.writeFileSync(SOLUTIONS_FILE, JSON.stringify(solutions, null, 2))
    return true
  } catch (error) {
    console.error('Error saving solutions to file:', error)
    return false
  }
}

// 讀取圖片數據
export const loadImagesFromFile = () => {
  try {
    ensureDataDir()
    if (fs.existsSync(IMAGES_FILE)) {
      const data = fs.readFileSync(IMAGES_FILE, 'utf8')
      return JSON.parse(data)
    }
  } catch (error) {
    console.error('Error loading images from file:', error)
  }
  return []
}

// 保存圖片數據
export const saveImagesToFile = (images: any[]) => {
  try {
    ensureDataDir()
    fs.writeFileSync(IMAGES_FILE, JSON.stringify(images, null, 2))
    return true
  } catch (error) {
    console.error('Error saving images to file:', error)
    return false
  }
}

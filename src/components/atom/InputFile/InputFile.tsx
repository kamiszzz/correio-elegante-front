import { Box, Button, CircularProgress, IconButton, Typography } from '@/components';
import { api } from '@/services';
import { AttachFile, DeleteOutline } from '@mui/icons-material';
import { useRef, useState } from 'react';

type Props = {
  id: string
  label: string
  handleUpdateFile: (fileUrl: string) => void
  fileUrl?: string
  bucketFilePath: string
  disabled?: boolean
}

export function InputFile({ id, fileUrl, bucketFilePath, label, handleUpdateFile, disabled = false }: Props) {
  const [file, setFile] = useState<string>(fileUrl || '')
  // const [fileInfo, setFileInfo] = useState<any>('')
  const [uploadLoading, setUploadLoading] = useState<boolean>(false)

  const inputRef: any = useRef(null)
  function removeFile() {
    setFile('');
    // setFileInfo(null);
    // handleUpdateFile('', {})
  }

  async function handleOnChange(e: any) {
    try {
      setUploadLoading(true)
      const formData = new FormData();
      formData.append("file", e.target.files[0])

      const filePath = URL.createObjectURL(e?.target?.files[0]);
      setFile(filePath)

      const { data: res } = await api.post(`/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      // setFileInfo(e.target.files[0])
      // handleUpdateFile(filePath)
      handleUpdateFile(res?.data?.url)

    } catch (error: any) {
      console.log(error.message)
    } finally {
      setUploadLoading(false)
    }
  }
  const PreviewImage = () => (
    <Box display="flex">
      <Box>
        <img src={file} alt="Logo" style={{ width: '100px', borderRadius: '4px' }} />
      </Box>
      <IconButton
        onClick={removeFile}
        color="error"
      >
        <DeleteOutline />
        <Typography variant="body2" color="error">Remover arquivo</Typography>
      </IconButton>
    </Box>
  )

  const AddButton = () => (
    <Box sx={{ flex: 1, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ flex: 1 }}>
        <input
          ref={inputRef}
          // accept="image/*"
          style={{ display: 'none' }}
          id={id}
          name={id}
          type="file"
          onChange={(event: any) => handleOnChange(event)}
        />
        <label htmlFor={id}>
          <Button
            variant={'outlined'}
            fullWidth
            sx={{ height: '56px' }}
            onClick={() => inputRef?.current?.click()}
            endIcon={<AttachFile />}>
            {label || 'Selecionar arquivo'}

          </Button>
        </label>
      </Box>
    </Box>
  )

  if (uploadLoading) return <LoadingComponent />

  return (
    <Box >

      {file ? <PreviewImage /> : <AddButton />}
    </Box>
  )

}

function LoadingComponent({ size = 40, color = "primary" }) {
  return (
    <Box style={{ height: '100%', width: '100%', display: 'grid', placeItems: 'center' }}>
      <CircularProgress size={size} color={'primary'} />
    </Box>
  )
}